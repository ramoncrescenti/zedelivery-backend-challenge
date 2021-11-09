import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterController } from './controllers/register';
import { SearchPartnerController } from './controllers/search-partner';
import { Partner, PartnerSchema } from './models/partner';
import { PartnerService } from './services/partner';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.DB_URI,
      }),
    }),
    MongooseModule.forFeature([{ name: Partner.name, schema: PartnerSchema }]),
  ],
  controllers: [RegisterController, SearchPartnerController],
  providers: [PartnerService],
})
export class AppModule {}
