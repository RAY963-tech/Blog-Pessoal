import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaController } from './Controller/tema.controller';
import { Tema } from './entities/tema.entity';
import { TemaService } from './services/tema.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  controllers: [TemaController],
  providers: [TemaService],
  exports: [TemaService],
})
export class TemaModule {}
