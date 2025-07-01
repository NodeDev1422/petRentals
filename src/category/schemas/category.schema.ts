// src/category/schemas/category.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Categories & Document;

@Schema({ timestamps: true })
export class Categories {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;
}

export const CategorySchema = SchemaFactory.createForClass(Categories);
