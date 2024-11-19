import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// 创建 MySQL 连接池
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;