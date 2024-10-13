import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { ReferralService } from './referral.service';
import { ReferralDto } from './dto/referral.dto';

@Controller('api/referral')
export class ReferralController {
    constructor (
        private readonly referralService: ReferralService
    ) {}

    @Get()
    async findAll() {
        try {
            const data = await this.referralService.findAll();
            return {
                success: true,
                data,
                message: 'Success'
            };
        } catch (error) {
            return {
                success: false,
                data: [],
                message: error.message
             };
        }
    }

    @Post()
    async create(@Body() referralBody: ReferralDto) {
        try {
            const referralData = await this.referralService.create(referralBody);
            return {
                success: true,
                data: referralData,
                message: 'Referral creation success'
            }
        } catch (error) {
            return {
                success: false,
                data: [],
                message: error.message
             };
        }
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() referralBody: ReferralDto) {
        try {
            const referralData = await this.referralService.update(id, referralBody);
            return {
                success: true,
                data: referralData,
                message: 'Referral update success'
            }
        } catch (error) {
            return {
                success: false,
                data: [],
                message: error.message
             };
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        try {
            await this.referralService.delete(id);
            return {
                success: true,
                data: null,
                message: 'Referral delete success'
            }
        } catch (error) {
            return {
                success: false,
                data: null,
                message: error.message
             };
        }
    }
}
