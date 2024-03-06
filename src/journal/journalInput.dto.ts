import {
    IsEmail,
    IsInt,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';
  import { CreateDateColumn } from 'typeorm';
  
  export class JournalInputDTO {
    @IsString()
    @MinLength(3, {
      message: 'title must be At least 3 character',
    })
    @MaxLength(75, {
      message: 'maximum character allowed is 75',
    })
    title: string;
    description: string;
    date?: Date;
  }