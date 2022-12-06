import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User{
	@Prop()
	fullName: string;

	@Prop()
	phone: string;

	@Prop()
	username: string;

	@Prop()
	password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);