const mongoose = require("mongoose");

const meatFoodSchema = new mongoose.Schema({
  rid: {
    type: String,
    unique: true, // 确保唯一性
    default: () => new mongoose.Types.ObjectId().toString(), // 自动生成
  },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MeatFood", meatFoodSchema);
