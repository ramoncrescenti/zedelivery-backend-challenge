import { Body, Controller, Get, Post } from '@nestjs/common';
import { PartnerService } from 'src/services/partner';

@Controller('register')
export class RegisterController {
  constructor(private partnerService: PartnerService) {}

  @Post()
  public async createPartner(@Body() partner: any) {
    return this.partnerService.createPartner(partner);
  }

  @Get('all')
  public async findAll() {
    return this.partnerService.findAll();
  }
}
