import { IsString, IsEmail, IsOptional } from 'class-validator';

export class ReferralDto {
    @IsString()
    readonly givenName: string;

    @IsString()
    readonly surname: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly phone: string;

    @IsString()
    @IsOptional()
    readonly home: string;
    
    @IsString()
    @IsOptional()
    readonly street: string;
    
    @IsString()
    @IsOptional()
    readonly suburb: string;
    
    @IsString()
    @IsOptional()
    readonly state: string;
    
    @IsString()
    @IsOptional()
    readonly postcode: string;
    
    @IsString()
    @IsOptional()
    readonly country: string;
}