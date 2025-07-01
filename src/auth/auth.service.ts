import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/schemas/user.schema';
import { LoginDto } from '../users/dto/login.dto';
import { VerifyOtpDto } from '../users/dto/verify-otp.dto';
import { ResendOtpDto } from '../users/dto/resend-otp.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async login({ phone }: LoginDto) {
    const otp = 123456;//this.generateOtp();
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
    const otpResendAvailableAt = new Date(Date.now() + 60 * 1000); // 1 minute

    const user = await this.userModel.findOneAndUpdate(
      { phone },
      { phone, otp, otpExpiresAt, otpResendAvailableAt },
      { upsert: true, new: true }
    );

    console.log(`OTP for ${phone}: ${otp}`); // Replace with SMS logic

    return { status: 'success', statusCode: 201,message: 'OTP sent successfully', otp };
  }

  async verifyOtp({ phone, otp }: VerifyOtpDto) {
    const user = await this.userModel.findOne({ phone });

    if (!user || user.otp !== otp) {
      throw new BadRequestException('Invalid OTP');
    }

    // if (new Date() > user.otpExpiresAt) {
    //   throw new BadRequestException('OTP expired');
    // }

    user.isVerified = true;
    //user.otp = null;
    await user.save();

    return { message: 'OTP verified successfully' };
  }

  async resendOtp({ phone }: ResendOtpDto) {
    const user = await this.userModel.findOne({ phone });
    if (!user) throw new BadRequestException('User not found');

    // if (user.otpResendAvailableAt && new Date() < user.otpResendAvailableAt) {
    //   throw new BadRequestException('Please wait before resending OTP');
    // }

    const newOtp = this.generateOtp();
    user.otp = "123456";//newOtp;
    user.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
    user.otpResendAvailableAt = new Date(Date.now() + 60 * 1000);
    await user.save();

    console.log(`Resent OTP for ${phone}: ${newOtp}`); // Replace with SMS

    return { message: 'OTP resent successfully', otp: newOtp };
  }
}
