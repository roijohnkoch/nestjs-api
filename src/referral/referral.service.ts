import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReferralEntity } from './referral.entity';
import { ReferralDto } from './dto/referral.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ReferralService {
    constructor (
        @InjectRepository(ReferralEntity)
        private readonly referralRepository: Repository<ReferralEntity>
    ) {}
    
    async create(body: ReferralDto): Promise<ReferralEntity> {
        const referralData = await this.referralRepository.create(body);
        return this.referralRepository.save(referralData);
    }

    async findAll(): Promise<ReferralEntity[]> {
        return await this.referralRepository.find();
    }

    async findOne(id: number): Promise<ReferralEntity> {
        const referralData =  this.referralRepository.findOneBy({ id });
        if (!referralData) {
            throw new HttpException('No data found', 404);
        }
        return referralData;
    }

    async update(id: number, newReferralData: ReferralDto): Promise<ReferralEntity> {
        const existingReferralData = await this.findOne(id);
        const updatedReferralData = this.referralRepository.merge(existingReferralData, newReferralData);
        return await this.referralRepository.save(updatedReferralData);
    }

    async delete(id: number) {
        const existingReferralData = await this.findOne(id);
        await this.referralRepository.remove(existingReferralData);
    }
}
