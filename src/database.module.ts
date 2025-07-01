import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://awspract1422:1A986s3OYwoQwGvz@cluster0.2fwqdlk.mongodb.net/petRentals?retryWrites=true&w=majority&appName=Cluster0`),
  ],
})
export class DatabaseModuleTsModule {}
