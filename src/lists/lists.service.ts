import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';

@Injectable()
export class ListsService {
  constructor(@InjectModel(List) private listModel: typeof List) {}

  create(createListDto: CreateListDto) {
    return this.listModel.create(createListDto);
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
