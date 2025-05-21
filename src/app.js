const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const userRoutes = require('./routes/User.routes');

// 新增路由
const drinkRoutes = require('./routes/Drink.routes');
const meatFoodRoutes = require('./routes/MeatFood.routes');
const soupRoutes = require('./routes/Soup.routes');
const vegetableRoutes = require('./routes/Vegetable.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// 连接数据库
connectDB();

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api/users', userRoutes);

// 新增路由注册
app.use('/api/drinks', drinkRoutes);
app.use('/api/meatfoods', meatFoodRoutes);
app.use('/api/soups', soupRoutes);
app.use('/api/vegetables', vegetableRoutes);

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});