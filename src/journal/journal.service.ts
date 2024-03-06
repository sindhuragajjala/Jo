import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JournalEntity } from './journal.entity';
import { JournalInputDTO } from './journalInput.dto';
import { UpdateJournalDTO } from './journalUpdate.dto';

@Injectable()
export class JournalService {
  constructor(
    @InjectRepository(JournalEntity)
    private journalRepo: Repository<JournalEntity>,
  ) {}

  async getAllJournals() {
    return this.journalRepo.find();
  }

  async createJournal(inp: JournalInputDTO) {
    const newJournal = await this.journalRepo.create(inp);
    console.log('newJournal', newJournal);
    const savedJournal = await this.journalRepo.save(newJournal);
    return savedJournal;
  }

  async updateJournal(inp: UpdateJournalDTO, id: string) {
    const res = await this.journalRepo.update(id, { ...inp });
    return 'success';
  }

  async deleteJournal(id: string) {
    const res = await this.journalRepo.delete(id);
    console.log('response');
    return 'success';
  }
}