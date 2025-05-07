// src/ticket/entities/ticket.entity.ts
import { ApiProperty } from '@nestjs/swagger';

export class Ticket {
  @ApiProperty({
    description: 'Unique identifier for the ticket',
    example: '123456',
  })
  id: string;

  @ApiProperty({
    description: 'Title of the ticket',
    example: 'Issue with login',
  })
  title: string;

  @ApiProperty({
    description: 'Description of the issue',
    example: 'User is unable to log into the platform.',
  })
  description: string;

  @ApiProperty({
    description: 'Price associated with the ticket (if applicable)',
    example: 19.99,
  })
  price: number;

  @ApiProperty({
    description: 'Status of the ticket',
    example: 'open',
    enum: ['open', 'closed', 'in-progress'],
  })
  status: string;

  @ApiProperty({
    description: 'Date when the ticket was created',
    example: '2025-05-07T10:00:00.000Z',
  })
  createdAt: string;

  @ApiProperty({
    description: 'Date when the ticket was last updated',
    example: '2025-05-08T15:30:00.000Z',
  })
  updatedAt: string;
}
