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
  } from "@nestjs/common";
  import { WaterInvoice } from "src/schemas/water-invoice.schema";
  import { WaterInvoiceService } from "src/service/water-invoice.service";
  
  @Controller("/api/v1/waterInvoice")
  export class WaterInvoiceController {
    constructor(private readonly waterInvocieService: WaterInvoiceService) {}
  
    @Post("/create")
    async creatWaterInvoice(@Body() waterInvoice: WaterInvoice, @Res() response) {
      console.log(WaterInvoice);
      try {
        await this.waterInvocieService.createWaterInvoice(waterInvoice);
        return response.status(HttpStatus.CREATED).json({
          waterInvoice,
        });
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          error,
        });
      }
    }
  
    @Get("/all")
    async getAll(@Res() response): Promise<WaterInvoice[]> {
      const WaterInvoiceList = await this.waterInvocieService.getAll();
      return response.status(HttpStatus.OK).json(WaterInvoiceList);
    }
  
    @Get("/get/:id")
    async getOne(@Res() response, @Req() request): Promise<WaterInvoice> {
      const id = request.params.id;
      const waterInvoice = await this.waterInvocieService.getOne(id);
      return response.status(HttpStatus.OK).json(waterInvoice);
    }
  
    @Patch("/update")
    async updateOne(
      @Body() waterInvoice: WaterInvoice,
      @Res() response
    ): Promise<WaterInvoice> {
      await this.waterInvocieService.updateOne(waterInvoice)
      return response.status(HttpStatus.OK).json(waterInvoice);
    }
  
    @Post("/delete")
    async deleteOne(@Body() waterInvoice: WaterInvoice, @Res() response): Promise<any>{
      console.log(waterInvoice);
      await this.waterInvocieService.deleteOne(waterInvoice);
      return response.status(HttpStatus.OK).json(
        {
            "message":"OK"
        });
    }
  }
  