import { Schema, model } from "mongoose";
const articleSchema = new Schema(
  {
    title: {
      type: String,
      lowercase: false,
      unique: true,
      trim: false,
      required: [true, "please enter title"],
    },
    description: {
      type: String,
      lowercase: false,
      unique: true,
      trim: false,
      required: false,
    },
    author: {
      type: String,
      lowercase: false,
      unique: false,
      trim: false,
      required: true,
    },
    body: String,
  },
  // tells Mongoose to automatically add two properties to your documents: createdAt and updatedAt.
  {
    timestamps: true,
  }
);
const ArticleModel = new model("Article", articleSchema, "Article");
export default ArticleModel;


// add the third parameter the way you want it to show in the DB
//this      module.exports = articleModel; or
// module.exports =  ArticleModel;
// or
// module.exports = mongoose.model('Article', articleSchema)