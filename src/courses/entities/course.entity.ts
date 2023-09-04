import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Course {
  @Prop()
  courseName: string;

  @Prop()
  corseCategory: string;
}
