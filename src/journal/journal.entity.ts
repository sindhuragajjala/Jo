import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'Journal' })
export class JournalEntity {
  @ObjectIdColumn()
  _id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @CreateDateColumn()
  date?: Date;
}