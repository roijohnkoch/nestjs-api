import { Module } from '@nestjs/common';
import { ReferralService } from './referral.service';
import { ReferralController } from './referral.controller';
import { ReferralEntity } from './referral.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ReferralEntity])],
    providers: [ReferralService],
    controllers: [ReferralController]
})
export class ReferralModule {}
