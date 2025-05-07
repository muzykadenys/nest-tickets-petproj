// src/ticket/ticket.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Ticket } from './entities/ticket.entity';

@ApiTags('Tickets')
@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new ticket',
    description: 'Creates a new support or service ticket with the provided details.',
  })
  @ApiBody({ type: CreateTicketDto })
  @ApiResponse({
    status: 201,
    description: 'Ticket created successfully',
    type: Ticket,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.createTicket(createTicketDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all tickets',
    description: 'Retrieves a list of all tickets.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of tickets',
    type: Ticket,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll() {
    return this.ticketService.getAllTickets();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a ticket by ID',
    description: 'Fetches details of a ticket by its unique identifier.',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'The ID of the ticket to retrieve',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Ticket retrieved successfully',
    type: Ticket,
  })
  @ApiResponse({ status: 404, description: 'Ticket not found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findOne(@Param('id') id: string) {
    return this.ticketService.getTicketById(id);
  }
}
