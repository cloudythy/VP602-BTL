import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Room, RoomSchema } from "./room.schema";

export type WaterInvoiceDocument = HydratedDocument<WaterInvoice>;

@Schema()
export class WaterInvoice{
	@Prop()
	name: string;

	@Prop({default:0})
    headIndex: number;

    @Prop()
    tailIndex: number;

    @Prop()
    pricePerIndex: number;

    @Prop()
    status:boolean;

    @Prop({default: Date.now() })
    createdDate: Date

	@Prop({type:RoomSchema})
	room: Room;
}

export const WaterInvoiceSchema = SchemaFactory.createForClass(WaterInvoice);