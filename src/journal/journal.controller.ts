import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    ValidationPipe,
  } from '@nestjs/common';
  import { JournalService } from './journal.service';
  import { JournalInputDTO } from './journalInput.dto';
  import { UpdateJournalDTO } from './journalUpdate.dto';
  
  @Controller('api/Journal')
  export class JournalController {
    constructor(private journalService: JournalService) {}
  
    @Get()
    getAllJournals() {
      return this.journalService.getAllJournals();
    }
  
    @Post()
    createJournal(@Body(new ValidationPipe()) createInp: JournalInputDTO) {
      console.log('createInp', createInp);
      return this.journalService.createJournal(createInp);
    }
    @Patch(':id')
    updateJournal(
      @Body(new ValidationPipe()) updateJournal: UpdateJournalDTO,
      @Param('id') id: string,
    ) {
      return this.journalService.updateJournal(updateJournal, id);
    }
  
    @Delete(':id')
    deleteJournal(@Param('id') id: string) {
      return this.journalService.deleteJournal(id);
    }
  }