import {
  Column,
  Model,
  Table,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  AllowNull,
  Unique,
} from 'sequelize-typescript';

@Table({ tableName: 'user_address', timestamps: true })
export class UserAddress extends Model<UserAddress> {
  @Column(DataType.INTEGER)
  userId: number; // 外键，指向 User 表

  @AllowNull(false)
  @Column(DataType.NUMBER)
  chainId: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  chainName: string; // 链类型，如 ethereum, bsc, polygon

  @AllowNull(false)
  @Unique('addressChainUnique') // 保证每个链上的地址唯一
  @Column(DataType.STRING)
  address: string; // 区块链地址

  // // 关联关系
  // @BelongsTo(() => User)
  // user: User;

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
