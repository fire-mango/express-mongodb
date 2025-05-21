const Soup = require("../models/Soup.model");

// 添加汤
exports.createSoup = async (req, res) => {
  try {
    const soup = new Soup(req.body);
    const newSoup = await soup.save();
    res.status(200).json(newSoup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 删除汤
exports.deleteSoup = async (req, res) => {
  try {
    const { id } = req.params; // 从URL参数中获取id

    // 使用id查找并删除汤
    const deletedSoup = await Soup.findOneAndDelete({ _id: id });

    if (!deletedSoup) {
      return res.status(404).json({ message: "汤不存在" });
    }

    res.json({ message: "汤已删除", deletedSoup });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 修改汤信息
exports.updateSoup = async (req, res) => {
  try {
    const { id } = req.params; // 从URL参数获取id
    const updateData = req.body; // 从请求体获取更新数据

    // 使用id查找并更新汤
    const updatedSoup = await Soup.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true, runValidators: true } // 返回更新后的文档并执行验证
    );

    if (!updatedSoup) {
      return res.status(404).json({ message: "汤不存在" });
    }

    res.json({ message: "汤已更新", updatedSoup });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 获取汤
exports.getSoups = async (req, res) => {
  try {
    // 查询所有汤并只返回名称字段
    const soups = await Soup.find().select("name -_id");

    // 将结果转换为仅包含名称的数组
    const soupNames = soups.map((soup) => soup.name);

    res.json(soupNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
