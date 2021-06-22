import { v4 as uuid } from 'uuid';

import {
  Entity,
  PrimaryColumn,
  Column, CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("users")
class User {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string; 

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };