import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from '../services/postagem.service';
import { DeleteResult } from 'typeorm';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Postagem')
@UseGuards(JwAuthGuard)
@Controller('/postagens')
@ApiBearerAuth()
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
    return this.postagemService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(postagem);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.update(postagem);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.postagemService.delete(id);
  }
}
