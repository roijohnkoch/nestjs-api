import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReferralModule } from './referral/referral.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    ReferralModule,
  ]
})
export class AppModule {}
