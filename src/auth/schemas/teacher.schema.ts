import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Teacher {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate Email entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  address: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
