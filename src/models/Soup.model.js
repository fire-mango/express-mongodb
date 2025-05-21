const mongoose = require("mongoose");

const soupSchema = new mongoose.Schema({
  rid: {
    type: String,
    unique: true, // 确保唯一性
    default: () => new mongoose.Types.ObjectId().toString(), // 自动生成
  },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Soup", soupSchema);
