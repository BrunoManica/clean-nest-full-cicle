import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { lastValueFrom } from 'rxjs';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectModel(List) private listModel: typeof List,
    private httpService: HttpService,
  ) {}

  async create(createListDto: CreateListDto) {
    const list = await this.listModel.create(createListDto);
    await lastValueFrom(this.httpService.post('list', { name: list.name }));
    return list;
  }

  findAll() {
    return this.listModel.findAll();
  }

  async findOne(id: number) {
    const list = await this.listModel.findByPk(id);

    if (list) {
      return list;
    }

    throw new NotFoundException('TEM NADA NO BANCO FI');
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
