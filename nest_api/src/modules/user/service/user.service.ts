// src/modules/user/user.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user'; // 需要根据实际路径调整
import { UserAddress } from '../models/user-address';
import { CreateUserDto } from '../dto/create-user.dto'; // 创建用户的 DTO
import { AuthValidatorDto } from '@/modules/auth/dto/auth.validator.dto';
import { Sequelize } from 'sequelize-typescript';
import { BusinessException } from '@/common/exceptions/business.exception';
import { ResponseCode } from '@/common/constants/code.constant';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    // private userAddress: typeof UserAddress,
    private readonly sequelize: Sequelize,
  ) {}

  // 创建用户
  async createUser(userData: AuthValidatorDto): Promise<any> {
    const transaction = await this.sequelize.transaction();

    try {
      // 查询 User 表中是否已有此地址的用户
      let user = await User.findOne({
        where: { address: userData.address },
        transaction,
      });

      // 如果用户不存在，则插入 User 表
      if (!user) {
        user = await User.create(
          {
            address: userData.address,
            email: '',
            password: '',
          },
          { transaction },
        );
      }

      // 查询 UserAddress 表中是否已有该链的地址记录
      let userAddress = await UserAddress.findOne({
        where: { userId: user.id, chainId: userData.chainId },
        transaction,
      });

      // 如果 UserAddress 记录不存在，则插入 UserAddress 表
      if (!userAddress) {
        userAddress = await UserAddress.create(
          {
            userId: user.id,
            chainId: userData.chainId,
            chainName: userData.chainName,
            address: userData.address,
          },
          { transaction },
        );
      }

      // 提交事务
      await transaction.commit();
      return { user, userAddress };
    } catch (error) {
      console.log(error);
      // 事务回滚
      await transaction.rollback();
      throw new BusinessException('用户创建失败', ResponseCode.BUSINESS_ERROR);
    }
  }

  // 获取所有用户
  async getAllUsers(page: number, pageSize: number): Promise<User[]> {
    return this.userModel.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }

  // 获取单个用户
  async getUserById(id: number): Promise<User> {
    return this.userModel.findOne({
      where: { id },
    });
  }

  // 更新用户
  async updateUser(id: number, updateUserDto: CreateUserDto): Promise<User> {
    await this.userModel.update(updateUserDto, { where: { id } });
    return this.getUserById(id);
  }

  // 删除用户
  async deleteUser(id: number): Promise<void> {
    const user = await this.getUserById(id);
    if (user) {
      await user.destroy();
    }
  }
}
