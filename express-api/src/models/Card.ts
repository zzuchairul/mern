import { model, Schema } from "mongoose";

const cardSchema = new Schema({
  title: String,
});

const cardModel = model("Card", cardSchema);

export default cardModel;
