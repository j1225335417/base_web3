// models/NftData.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';

interface NftDataAttributes {
  id: number;
  collectionId: string | null;
  tokenId: number | null;
  owner: string | null;
  blockNumber: number | null;
  image: string | null;
  name: string | null;
  description: string | null;
  attributes: any | null;
}

class NftData extends Model<NftDataAttributes> {
  public id!: number;
  public collectionId!: string | null;
  public tokenId!: number | null;
  public owner!: string | null;
  public blockNumber!: number | null;
  public image!: string | null;
  public name!: string | null;
  public description!: string | null;
  public attributes!: any | null;
}

NftData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    collectionId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tokenId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    blockNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attributes: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    timestamps: false, // 默认启用 createdAt 和 updatedAt
    underscored: true,
    sequelize,
    modelName: 'NftData',
    tableName: 'nft_data',
  }
);

export default NftData;
