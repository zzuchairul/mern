import { model, Schema } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    default: "Title",
  },
  desc: {
    type: String,
    default: "Description",
  },
});

const Model = model("Note", schema);

export default Model;
