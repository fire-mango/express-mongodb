const express = require("express");
const router = express.Router();
const {
  createSoup,
  deleteSoup,
  updateSoup,
  getSoups,
} = require("../controllers/Soup.controller");

// POST /api/addSoup - 添加汤
router.post("/addSoup", createSoup);

// DELETE /api/deleteSoup/:id - 删除指定汤
router.delete("/deleteSoup/:rid", deleteSoup);

// PUT /api/updateSoup/:rid - 修改指定汤
router.put("/updateSoup/:rid", updateSoup);

// GET /api/getSoup - 获取所有汤
router.get("/getSoup", getSoups);

module.exports = router;
