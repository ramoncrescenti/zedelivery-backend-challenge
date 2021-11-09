import { Body, Controller, Get, Param } from '@nestjs/common';
import { PartnerService } from 'src/services/partner';

@Controller('search')
export class SearchPartnerController {
  constructor(private partnerService: PartnerService) {}

  @Get('coords')
  public async findNearestPartnerByCoordinates(@Body() point: any) {
    return this.partnerService.findNearestPartnerByCoordinates(point);
  }

  @Get('id/:id')
  public async findPartnerById(@Param() params: any) {
    return this.partnerService.findPartnerById(params.id);
  }
}
