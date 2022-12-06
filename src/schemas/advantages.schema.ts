import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AdvantagesDocument = HydratedDocument<Advantages>;

@Schema()
export class Advantages {
	@Prop()
	wifi: boolean;

	@Prop()
	waterHeater: boolean;

	@Prop()
	AC: boolean;

	@Prop()
	garden: boolean;

	@Prop()
	nearSchool: boolean;

	@Prop()
	nearHospital: boolean;
}

export const AdvantagesSchema = SchemaFactory.createForClass(Advantages);