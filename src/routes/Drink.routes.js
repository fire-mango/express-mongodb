const express = require("express");
const router = express.Router();
const {
  createDrink,
  deleteDrink,
  updateDrink,
  getDrinks,
} = require("../controllers/Drink.controller");

// POST /api/addDrink - 添加饮料
router.post("/addDrink", createDrink);

// DELETE /api/deleteDrink/:id - 删除指定饮料
router.delete("/deleteDrink/:rid", deleteDrink);

// PUT /api/updateDrink/:rid - 修改指定饮料
router.put("/updateDrink/:rid", updateDrink);

// GET /api/getDrink - 获取所有饮料
router.get("/getDrink", getDrinks);

module.exports = router;
