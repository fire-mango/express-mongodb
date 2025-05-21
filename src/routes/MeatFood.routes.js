const express = require("express");
const router = express.Router();
const {
  createMeatFood,
  deleteMeatFood,
  updateMeatFood,
  getMeatFoods,
} = require("../controllers/MeatFood.controller");

// POST /api/addMeatFood - 添加肉类食品
router.post("/addMeatFood", createMeatFood);

// DELETE /api/deleteMeatFood/:id - 删除指定肉类食品
router.delete("/deleteMeatFood/:rid", deleteMeatFood);

// PUT /api/updateMeatFood/:rid - 修改指定肉类食品
router.put("/updateMeatFood/:rid", updateMeatFood);

// GET /api/getMeatFood - 获取所有肉类食品
router.get("/getMeatFood", getMeatFoods);

module.exports = router;
