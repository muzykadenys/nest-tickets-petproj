import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async createTicket(createTicketDto: CreateTicketDto) {
    return this.prisma.ticket.create({
      data: createTicketDto, // Now includes price in DTO
    });
  }

  async getAllTickets() {
    return this.prisma.ticket.findMany();
  }

  async getTicketById(ticketId: string) {
    return this.prisma.ticket.findUnique({
      where: {
        id: ticketId,
      },
    });
  }
}
