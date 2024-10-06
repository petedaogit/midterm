import mongoose from "mongoose";

const expSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      min: 0,
      max: 50,
    },
    compName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ExperienceModel = mongoose.model("Experience", expSchema);
export default ExperienceModel;
