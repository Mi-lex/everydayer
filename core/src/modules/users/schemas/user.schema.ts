import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: { updatedAt: true } })
export class User {
    @Prop()
    name: string;

    @Prop()
    birthdate: Date;

    @Prop({ required: true, trim: true, unique: true, lowercase: true })
    email: string;
}

export const CatSchema = SchemaFactory.createForClass(User);
