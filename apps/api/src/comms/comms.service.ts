import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';
import { TUser } from './comms.types';
import {
  findUserById,
  formatList,
  getCatNames,
  getTotalPriceByCats,
} from './comms.utils';
import { PRICES } from './comms.constants';

@Injectable()
export class CommsService {
  private readonly dataFilePath = path.join(
    process.cwd(),
    process.env.NODE_ENV === 'production'
      ? 'dist/src/assets/data.json'
      : 'assets/data.json',
  );

  async getNextDelivery(userId: string): Promise<any> {
    const data = (await this.readDataFile()) as TUser[];

    const user = findUserById(userId, data);

    if (!user) return null;

    const { firstName, cats } = user;

    const catNames = getCatNames(cats);
    const formattedCatNames = formatList(catNames);
    const totalPrice = getTotalPriceByCats(cats, PRICES);

    return {
      totalPrice,
      freeGift: totalPrice > 120,
      title: `Your next delivery for ${formattedCatNames}`,
      message: `Hey ${firstName}! In two days' time, we'll be charging you for your next order for ${formattedCatNames}'s fresh food.`,
    };
  }

  private async readDataFile(): Promise<any> {
    try {
      const fileContents = await fs.readFile(this.dataFilePath, 'utf8');
      return JSON.parse(fileContents);
    } catch (error) {
      console.error('Error reading file:', error);
      return {};
    }
  }
}
