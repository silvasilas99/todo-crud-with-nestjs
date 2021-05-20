import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { boolean } from "yargs";
import { ApiProperty } from "@nestjs/swagger";

@Entity('todos')
export class TodoEntify {

    @PrimaryGeneratedColumn() 
    id: number;
  
    @ApiProperty()
    @Column() 
    title: string;
  
    @ApiProperty()
    @Column()
    description: string
  
    @ApiProperty()
    @Column({
      type: 'boolean',
      default: false
    })
    is_done: boolean
  
    @CreateDateColumn()
    create_at: Date
  
    @UpdateDateColumn()
    updated_at: Date

}
