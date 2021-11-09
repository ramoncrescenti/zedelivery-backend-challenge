import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Partner, PartnerDocument } from 'src/models/partner';

@Injectable()
export class PartnerService {
  constructor(
    @InjectModel(Partner.name) private partnerModel: Model<PartnerDocument>,
  ) {}

  public async createPartner(partner: any): Promise<Partner> {
    return this.partnerModel.create(partner);
  }

  public async findNearestPartnerByCoordinates(point: any) {
    return this.partnerModel
      .findOne()
      .where('address')
      .near({ center: point.coordinates, spherical: true })
      .where('coverageArea')
      .intersects(point);
  }

  public async findPartnerById(id: any) {
    return this.partnerModel.findById(id);
  }

  public async findAll(): Promise<Partner[]> {
    return this.partnerModel.find().exec();
  }
}
