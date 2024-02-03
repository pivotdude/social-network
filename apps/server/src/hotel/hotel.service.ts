import { Injectable } from '@nestjs/common'
import { HotelRepository } from './hotel.repository'
import { Hotel } from '../../prisma/generated/client'

@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepository) {}

  async findAll(): Promise<Hotel[]> {
    const hotels = await this.hotelRepository.findAll()
    console.log(hotels)
    return hotels
  }

  async find(uid: string, userId: number | null): Promise<Hotel> {
    const hotel = await this.hotelRepository.find(uid, userId)
    // @ts-ignore
    hotel.isFollow = hotel?.favorites?.length > 0

    // @ts-ignore
    hotel.userReview = hotel?.reviews?.find((review) => review.userId === userId)
    // @ts-ignore
    hotel.reviews = hotel?.reviews?.filter((review) => review.userId !== userId)

    return hotel
  }
}
