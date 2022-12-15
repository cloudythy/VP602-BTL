import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Room, RoomSchema } from "./room.schema";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User{
	@Prop({required:true})
    fullname: string;

    @Prop({required:true, unique:true, lowercase:true})
    phoneNumber: string;

    @Prop({required:true})
    password: string

    @Prop({})

	@Prop({type: RoomSchema})
	room: Room

    @Prop({default: Date.now() })
    createdDate: Date
}

export const UserSchema = SchemaFactory.createForClass(User);