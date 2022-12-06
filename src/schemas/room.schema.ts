import { Advantages, AdvantagesSchema } from './advantages.schema';
import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { User, UserSchema } from './user.schema';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room{
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

	@Prop({ type: AdvantagesSchema })
	advantages: Advantages;

	@Prop({ type: UserSchema })
	owner: User;
}

export const RoomSchema = SchemaFactory.createForClass(Room);