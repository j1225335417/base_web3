// pages/api/nftData.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import NftData from '@/models/NftData'; // 假设您已经定义了 NftData 模型

import { Nft } from './nftData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Nft | { message: string }>
) {
  const { tokenId, collectionId } = req.query; // 从请求参数中获取 NFT 的 ID

  // 检查 ID 是否存在
  if (!tokenId || !collectionId) {
    return res.status(400).json({ message: 'Missing ID parameter' });
  }

  try {
    // 使用 findOne 查找单个 NFT
    const nft = await NftData.findOne({
      where: {
        tokenId: req.query.tokenId,
        collectionId: req.query.collectionId,
      }, // 查找条件
    });
    debugger;

    // 如果未找到 NFT
    if (!nft) {
      return res.status(404).json({ message: 'NFT not found' });
    }
    // 返回找到的 NFT 数据
    res.status(200).json({
      id: nft.id,
      collectionId: nft.collectionId,
      tokenId: nft.tokenId,
      owner: nft.owner,
      blockNumber: nft.blockNumber,
      image: nft.image,
      name: nft.name,
      description: nft.description,
      attributes: nft.attributes,
    });
  } catch (error) {
    console.error('Error fetching NFT:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}
