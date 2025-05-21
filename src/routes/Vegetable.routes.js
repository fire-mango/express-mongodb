const express = require("express");
const router = express.Router();
const {
  createVegetable,
  deleteVegetable,
  updateVegetable,
  getVegetables,
} = require("../controllers/Vegetable.controller");

// POST /api/addVegetable - 添加蔬菜
router.post("/addVegetable", createVegetable);

// DELETE /api/deleteVegetable/:id - 删除指定蔬菜
router.delete("/deleteVegetable/:rid", deleteVegetable);

// PUT /api/updateVegetable/:rid - 修改指定蔬菜
router.put("/updateVegetable/:rid", updateVegetable);

// GET /api/getVegetable - 获取所有蔬菜
router.get("/getVegetable", getVegetables);

module.exports = router;
