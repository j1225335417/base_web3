import { Sequelize } from 'sequelize';

// 创建一个 Sequelize 实例并连接到数据库
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost', // 数据库主机
  username: process.env.DB_USER || 'root', // 数据库用户名
  password: process.env.DB_PASSWORD || '', // 数据库密码
  database: process.env.DB_NAME || 'my_database', // 数据库名称
  logging: false, // 禁止日志输出（可以根据需要启用）
});

export default sequelize;
