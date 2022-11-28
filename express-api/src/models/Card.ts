import { model, Schema } from "mongoose";

const cardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const cardModel = model("Card", cardSchema);

export default cardModel;
