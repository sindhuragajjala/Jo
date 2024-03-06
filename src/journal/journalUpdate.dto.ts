import { PartialType } from '@nestjs/mapped-types';
import { JournalInputDTO } from './journalInput.dto';

export class UpdateJournalDTO extends PartialType(JournalInputDTO) {}