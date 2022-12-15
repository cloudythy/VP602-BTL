import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Patch,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ElectricInvoice } from "src/schemas/electric-invoice.schema";
import { EInvoiceService } from "src/service/electric-invoice.service";

@Controller("/api/v1/einvoice")
@UseGuards(AuthGuard("jwt"))
export class ElectricInvoiceController {
  constructor(private readonly eInvocieService: EInvoiceService) {}

  @Post("/create")
  async createInvoice(@Body() eInvoice: ElectricInvoice, @Res() response) {
    console.log(eInvoice);
    try {
      await this.eInvocieService.createEInvoice(eInvoice);
      return response.status(HttpStatus.CREATED).json({
        eInvoice,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        error,
      });
    }
  }

  @Get("/all")
  async getAll(@Res() response): Promise<ElectricInvoice[]> {
    const eInvoiceList = await this.eInvocieService.getAll();
    return response.status(HttpStatus.OK).json(eInvoiceList);
  }

  @Get("/get/:id")
  async getOne(@Res() response, @Req() request): Promise<ElectricInvoice> {
    const id = request.params.id;
    const eInvoice = await this.eInvocieService.getOne(id);
    return response.status(HttpStatus.OK).json(eInvoice);
  }

  @Patch("/update")
  async updateOne(
    @Body() eInvoice: ElectricInvoice,
    @Res() response
  ): Promise<ElectricInvoice> {
    await this.eInvocieService.updateOne(eInvoice)
    return response.status(HttpStatus.OK).json(eInvoice);
  }

  @Get("/delete/:id")
  async deleteOne(@Req() request, @Res() response): Promise<any>{
    //console.log(eInvoice);
    await this.eInvocieService.deleteOne(request.params.id);
    return response.status(HttpStatus.OK).json();
  }
}
