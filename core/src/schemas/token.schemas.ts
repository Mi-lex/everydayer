import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user.schema';

export type TokenDocument = Token & Document;

@Schema({ timestamps: true })
export class Token {
    @Prop()
    type: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true })
    user: User;

    @Prop()
    value: string;
}

export const CatSchema = SchemaFactory.createForClass(Token);
