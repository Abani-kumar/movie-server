import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  shortDescription: {
    type: String,
  },
  longDescription: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

export default mongoose.model("Movie", movieSchema);
