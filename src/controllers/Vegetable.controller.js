const Vegetable = require("../models/Vegetable.model");

// 添加蔬菜
exports.createVegetable = async (req, res) => {
  try {
    const vegetable = new Vegetable(req.body);
    const newVegetable = await vegetable.save();
    res.status(200).json(newVegetable);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 删除蔬菜
exports.deleteVegetable = async (req, res) => {
  try {
    const { id } = req.params; // 从URL参数中获取id

    // 使用id查找并删除蔬菜
    const deletedVegetable = await Vegetable.findOneAndDelete({ _id: id });

    if (!deletedVegetable) {
      return res.status(404).json({ message: "蔬菜不存在" });
    }

    res.json({ message: "蔬菜已删除", deletedVegetable });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 修改蔬菜信息
exports.updateVegetable = async (req, res) => {
  try {
    const { id } = req.params; // 从URL参数获取id
    const updateData = req.body; // 从请求体获取更新数据

    // 使用id查找并更新蔬菜
    const updatedVegetable = await Vegetable.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true, runValidators: true } // 返回更新后的文档并执行验证
    );

    if (!updatedVegetable) {
      return res.status(404).json({ message: "蔬菜不存在" });
    }

    res.json({ message: "蔬菜已更新", updatedVegetable });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 获取所有蔬菜
exports.getVegetables = async (req, res) => {
  try {
    // 查询所有蔬菜并只返回名称字段
    const vegetables = await Vegetable.find().select("name -_id");

    // 将结果转换为仅包含名称的数组
    const vegetableNames = vegetables.map((vegetable) => vegetable.name);

    res.json(vegetableNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
