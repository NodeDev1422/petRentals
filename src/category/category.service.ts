import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Categories, CategoryDocument } from './schemas/category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Categories.name) private categoryModel: Model<CategoryDocument>) {}
   create(data: Partial<Categories>) {
    return this.categoryModel.create(data);
  }

  async findAll() {
    const getAllCategories = await this.categoryModel.find({},{_id:0, "__v": 0}).exec();
    return {status: 'success',message:'Categories retrieved successfully', data: getAllCategories};

  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
