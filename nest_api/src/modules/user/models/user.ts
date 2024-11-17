import {
  Column,
  Model,
  Table,
  DataType,
  CreatedAt,
  UpdatedAt,
  IsEmail,
  AllowNull,
  Unique,
} from 'sequelize-typescript';

@Table({ tableName: 'user', timestamps: true })
export class User extends Model<User> {
  @AllowNull(false)
  @Column(DataType.STRING)
  address: string; // 用户名

  @AllowNull(true)
  @Column(DataType.STRING)
  email: string; // 用户邮箱

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string; // 用户密码

  @Column(DataType.BOOLEAN)
  isVerified: boolean; // 用户是否已验证

  // 自定义 createdAt 字段，使用 BIGINT 类型
  @Column({
    field: 'created_at',
    type: DataType.BIGINT,
    allowNull: false,
    defaultValue: () => Date.now(), // 默认值为当前 Unix 时间戳（毫秒）
  })
  createdAt: number;

  // 自定义 updatedAt 字段，使用 BIGINT 类型
  @Column({
    field: 'updated_at',
    type: DataType.BIGINT,
    allowNull: false,
    defaultValue: () => Date.now(), // 默认值为当前 Unix 时间戳（毫秒）
  })
  updatedAt: number;
}
