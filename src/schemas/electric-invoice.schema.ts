import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Room, RoomSchema } from "./room.schema";

export type ElectricInvoiceDocument = HydratedDocument<ElectricInvoice>;

@Schema()
export class ElectricInvoice{

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

export const ElectricInvoiceSchema = SchemaFactory.createForClass(ElectricInvoice);