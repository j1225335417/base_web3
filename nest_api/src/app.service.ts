import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ethers } from 'ethers';


@Injectable()
export class AppService {
  getHello(): any {
    return {msg:'Hello World!'};
  }
}
