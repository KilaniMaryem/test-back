import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './create-admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}
    @Post('add')
    create(@Body() createAdminDto: CreateAdminDto) {
      return this.adminService.create(createAdminDto);
    }
}
