import { Schema, Prop, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { User, UserSchema } from "./user.schema";

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
@Prop()
buildingName: string;

@Prop()
name: string;

@Prop()
address: string;

@Prop()
status: boolean;

@Prop()
type: string;

@Prop()
floor: number;

@Prop()
pricePerMonth: number;

@Prop()
numOfBedrooms: number;

@Prop()
capacity: number;

@Prop(
	raw({
	wifi: { type: Boolean, default: false },
	waterHeater: { type: Boolean, default: false },
	AC: { type: Boolean, default: false },
	garden: { type: Boolean, default: false },
	nearSchool: { type: Boolean, default: false },
	nearHospital: { type: Boolean, default: false },
	})
)
advantages: Record<string, any>;

}

export const RoomSchema = SchemaFactory.createForClass(Room);
