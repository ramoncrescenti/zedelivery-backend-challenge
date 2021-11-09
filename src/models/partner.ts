import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';
import { multiPolygonSchema } from './multi-polygon';
import { PointSchema } from './point';

export type PartnerDocument = Partner & Document;

@Schema()
export class Partner {
  @Prop()
  @IsNotEmpty({
    message: 'tradingName is required',
  })
  tradingName: string;

  @Prop()
  ownerName: string;

  @Prop()
  document: string;

  @Prop({ type: multiPolygonSchema })
  coverageArea: typeof multiPolygonSchema;

  @Prop({ type: PointSchema })
  address: typeof PointSchema;
}

export const PartnerSchema = SchemaFactory.createForClass(Partner);
PartnerSchema.index({ coverageArea: '2dsphere' });
PartnerSchema.index({ address: '2dsphere' });
