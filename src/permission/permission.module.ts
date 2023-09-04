import { Module } from '@nestjs/common';
import { PermissionService } from '../permission/services/permission.service';
import { PermissionController } from '../permission/controllers/permission.controller';
import { Permission } from './entities/permission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService],
  imports: [TypeOrmModule.forFeature([
    Permission
  ])]
})
export class PermissionModule {}
