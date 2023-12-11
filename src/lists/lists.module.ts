import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { List } from './entities/list.entity';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';

@Module({
  imports: [
    SequelizeModule.forFeature([List]),
    HttpModule.register({
      baseURL: 'http://localhost:6000',
    }),
  ],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
