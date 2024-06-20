import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    //Relasi kategori dengan produk
    products:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    }]
  },
  {
    timestamps: true,
  }
);

const CategoriesModel = mongoose.model("Category", CategoriesSchema);

export default CategoriesModel;
