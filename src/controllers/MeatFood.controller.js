const MeatFood = require("../models/MeatFood.model");

// 添加肉类食品
exports.createMeatFood = async (req, res) => {
  try {
    const meatFood = new MeatFood(req.body);
    const newMeatFood = await meatFood.save();
    res.status(200).json(newMeatFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 删除肉类食品
exports.deleteMeatFood = async (req, res) => {
  try {
    const { id } = req.params; // 从URL参数中获取id

    // 使用id查找并删除肉类食品
    const deletedMeatFood = await MeatFood.findOneAndDelete({ _id: id });

    if (!deletedMeatFood) {
      return res.status(404).json({ message: "肉类食品不存在" });
    }

    res.json({ message: "肉类食品已删除", deletedMeatFood });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 修改肉类食品信息
exports.updateMeatFood = async (req, res) => {
  try {
    const { id } = req.params; // 从URL参数获取id
    const updateData = req.body; // 从请求体获取更新数据

    // 使用id查找并更新肉类食品
    const updatedMeatFood = await MeatFood.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true, runValidators: true } // 返回更新后的文档并执行验证
    );

    if (!updatedMeatFood) {
      return res.status(404).json({ message: "肉类食品不存在" });
    }

    res.json({ message: "肉类食品已更新", updatedMeatFood });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 获取肉类食品
exports.getMeatFoods = async (req, res) => {
  try {
    // 查询所有肉类食品并只返回名称字段
    const meatFoods = await MeatFood.find().select("name -_id");

    // 将结果转换为仅包含名称的数组
    const meatFoodNames = meatFoods.map((meatFood) => meatFood.name);

    res.json(meatFoodNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
