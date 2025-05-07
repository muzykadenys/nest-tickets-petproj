import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateTicketDto {
  @ApiProperty({
    description: "Title of the ticket",
    example: "Concert in Lviv",
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: "Detailed description of the ticket",
    example: "A live performance at the Lviv Opera House.",
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: "Price of the ticket",
    example: 199.99,
  })
  @IsNumber()
  price: number;
}
