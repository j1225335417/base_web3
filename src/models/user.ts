import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';

// 定义 User 模型
const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'user',
    timestamps: false, // 默认启用 createdAt 和 updatedAt
    underscored: true,
  }
);

export default User;
