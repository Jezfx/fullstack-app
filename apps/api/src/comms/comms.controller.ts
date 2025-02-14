import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CommsService } from './comms.service';
import { TNextDelivery } from './comms.types';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get('your-next-delivery/:userId')
  async getNextDelivery(
    @Param('userId') userId: string,
  ): Promise<TNextDelivery> {
    const deliveryData = (await this.commsService.getNextDelivery(
      userId,
    )) as TNextDelivery;

    if (!deliveryData) {
      throw new NotFoundException(`Delivery data not found for user ${userId}`);
    }
    return deliveryData;
  }
}
