import mongoose from "mongoose";

const { Schema } = mongoose;

const carSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    fuel_type: {
      type: String,
      enum: ["petrol", "diesel", "electric", "gas", "hybrid"],
      required: true,
    },
    drive: {
      type: String,
      enum: ["fwd", "rwd", "awd", "4wd"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    fuel_economy: {
      type: Number,
    },
    drive_range: {
      type: Number,
    },
    seats: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Cars || mongoose.model("Cars", carSchema);
