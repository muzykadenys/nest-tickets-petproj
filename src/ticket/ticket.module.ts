import { Module } from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { TicketController } from "./ticket.controller";

@Module({
  imports: [PrismaModule],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
