import * as mongoose from 'mongoose';

export type PointDocument = mongoose.Document;

export const PointSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  { _id: false },
);

// export const PointModel = mongoose.model('Point', PointSchema);
