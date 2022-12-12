import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtModule } from '@nestjs/jwt';
import { AppService } from './app.service';
import { secret } from './utils/constants';
import { join } from 'path/posix';
import { ElectricInvoiceModule } from './modules/electric-invoice/electric-invoice.module';
import { WaterInvoiceModule } from './modules/water-invoice/water-invoice.module';
import { RoomModule } from './modules/room/room.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: '2h' },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ElectricInvoiceModule,
    WaterInvoiceModule,
    RoomModule,
    AuthModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
