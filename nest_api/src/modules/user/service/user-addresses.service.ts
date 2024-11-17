// src/modules/user-addresses/service/user-addresses.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserAddress } from '../models/user-address';
import { CreateUserAddressDto } from '../dto/create-user-address.dto';
import { UpdateUserAddressDto } from '../dto/update-user-address.dto';

@Injectable()
export class UserAddressesService {
  constructor(
    @InjectModel(UserAddress)
    private readonly userAddressModel: typeof UserAddress,
  ) {}

  // 创建用户地址
  async create(
    createUserAddressDto: CreateUserAddressDto,
  ): Promise<UserAddress> {
    return this.userAddressModel.create(createUserAddressDto);
  }

  // 查找所有用户地址
  async findAll(): Promise<UserAddress[]> {
    return this.userAddressModel.findAll();
  }

  // 查找单个用户地址
  async findOne(id: number): Promise<UserAddress> {
    return this.userAddressModel.findOne({
      where: { id },
    });
  }

  // 更新用户地址
  async update(
    id: number,
    updateUserAddressDto: UpdateUserAddressDto,
  ): Promise<[number, UserAddress[]]> {
    return this.userAddressModel.update(updateUserAddressDto, {
      where: { id },
      returning: true, // 返回更新后的数据
    });
  }

  // 删除用户地址
  async remove(id: number): Promise<void> {
    const address = await this.findOne(id);
    if (address) {
      await address.destroy();
    }
  }
}
