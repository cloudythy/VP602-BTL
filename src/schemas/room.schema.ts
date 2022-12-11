import { Schema, Prop, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { User, UserSchema } from "./user.schema";

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
@Prop()
buildingName: string;

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
	wifi: { type: Boolean },
	waterHeater: { type: Boolean },
	AC: { type: Boolean },
	garden: { type: Boolean },
	nearSchool: { type: Boolean },
	nearHospital: { type: Boolean },
	})
)
advantages: Record<string, any>;

@Prop({ type: UserSchema })
owner: User;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
