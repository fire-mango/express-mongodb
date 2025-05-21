const Drink = require("../models/Drink.model");

// 添加饮料
exports.createDrink = async (req, res) => {
  try {
    const drink = new Drink(req.body);
    const newDrink = await drink.save();
    res.status(200).json(newDrink);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 删除饮料
exports.deleteDrink = async (req, res) => {
  try {
    const { rid } = req.params; // 从URL参数中获取rid

    // 使用id查找并删除饮料
    const deletedDrink = await Drink.findOneAndDelete({ rid });

    if (!deletedDrink) {
      return res.status(404).json({ message: "饮料不存在" });
    }

    res.json({ message: "饮料已删除", deletedDrink });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 修改饮料信息
exports.updateDrink = async (req, res) => {
  try {
    const { rid } = req.params; // 从URL参数获取rid
    const updateData = req.body; // 从请求体获取更新数据

    // 使用rid查找并更新饮料（确保使用{rid}匹配模型字段）
    const updatedDrink = await Drink.findOneAndUpdate(
      { rid }, // 匹配模型中的rid字段
      { $set: updateData },
      { new: true, runValidators: true } // 返回更新后的文档并执行验证
    );

    if (!updatedDrink) {
      return res.status(404).json({ message: "饮料不存在" });
    }

    res.json({ message: "饮料已更新", updatedDrink });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 获取所有饮料
exports.getDrinks = async (req, res) => {
  try {
    // 查询所有饮料并只返回名称字段
    const drinks = await Drink.find().select("name rid -_id");
    // 将结果转换为仅包含名称的数组
    const drinkNames = drinks.map((drink) => {
      return { name: drink.name, rid: drink.rid };
    });

    res.json(drinkNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
