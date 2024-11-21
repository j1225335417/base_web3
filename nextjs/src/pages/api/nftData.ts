// pages/api/nftData.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import NftData from '@/models/NftData'; // 假设您已经定义了 NftData 模型

interface Nft {
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

interface PaginatedResponse {
  total: number;
  data: Nft[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaginatedResponse | { message: string }>
) {
  const { page = 1, pageSize = 10 } = req.query; // 获取分页参数，默认为第 1 页，每页 10 条记录

  const offset = (parseInt(page as string) - 1) * parseInt(pageSize as string); // 计算 offset

  try {
    // 查询数据库并分页
    const result = await NftData.findAndCountAll({
      limit: parseInt(pageSize as string), // 每页记录数
      offset: offset, // 跳过的记录数
    });

    // 将结果映射成 Nft 数组
    const nfts: Nft[] = result.rows.map((row: NftData) => ({
      id: row.id,
      collectionId: row.collectionId,
      tokenId: row.tokenId,
      owner: row.owner,
      blockNumber: row.blockNumber,
      image: row.image,
      name: row.name,
      description: row.description,
      attributes: row.attributes,
    }));

    // 返回总记录数和分页数据
    res.status(200).json({
      total: result.count, // 总记录数
      data: nfts, // 当前页的数据
    });
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}
