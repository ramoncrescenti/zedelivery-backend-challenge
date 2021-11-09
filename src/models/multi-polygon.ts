import * as mongoose from 'mongoose';

export const multiPolygonSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['MultiPolygon'],
      required: true,
    },
    coordinates: {
      type: [[[[Number]]]], // Array of arrays of arrays of numbers
      required: true,
    },
  },
  { _id: false },
);

export const citySchema = new mongoose.Schema({
  name: String,
  location: multiPolygonSchema,
});
