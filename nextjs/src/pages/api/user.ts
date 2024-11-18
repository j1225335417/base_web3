import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      // 查询所有用户
      const users = await User.findAll();

      return res.status(200).json({
        success: true,
        data: users,
      });
    } else {
      // 查询所有用户
      const users = await User.findAll();

      return res.status(200).json({
        success: true,
        data: users,
      });
      // return res.status(405).json({
      //   success: false,
      //   message: 'Method Not Allowed',
      // });
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
