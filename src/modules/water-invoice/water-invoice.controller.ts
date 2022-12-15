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
  import { WaterInvoice } from "src/schemas/water-invoice.schema";
  import { WaterInvoiceService } from "src/service/water-invoice.service";
  
  @Controller("/api/v1/waterInvoice")
  export class WaterInvoiceController {
    constructor(private readonly waterInvocieService: WaterInvoiceService) {}
  
    @Post("/create")
    @UseGuards(AuthGuard("jwt"))
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
    @UseGuards(AuthGuard("jwt"))
    async getAll(@Res() response): Promise<WaterInvoice[]> {
      const WaterInvoiceList = await this.waterInvocieService.getAll();
      return response.status(HttpStatus.OK).json(WaterInvoiceList);
    }
  
    @Get("/get/:id")
    @UseGuards(AuthGuard("jwt"))
    async getOne(@Res() response, @Req() request): Promise<WaterInvoice> {
      const id = request.params.id;
      const waterInvoice = await this.waterInvocieService.getOne(id);
      return response.status(HttpStatus.OK).json(waterInvoice);
    }
  
    @Patch("/update")
    @UseGuards(AuthGuard("jwt"))
    async updateOne(
      @Body() waterInvoice: WaterInvoice,
      @Res() response
    ): Promise<WaterInvoice> {
      await this.waterInvocieService.updateOne(waterInvoice)
      return response.status(HttpStatus.OK).json(waterInvoice);
    }
  
    @Get("/delete/:id")
    @UseGuards(AuthGuard("jwt"))
    async deleteOne(@Req() request, @Res() response): Promise<any>{
      //console.log(waterInvoice);
      await this.waterInvocieService.deleteOne(request.params.id);
      return response.status(HttpStatus.OK).json(
        {
            "message":"OK"
        });
    }
  }
  