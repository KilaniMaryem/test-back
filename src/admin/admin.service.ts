import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './create-admin.dto';

@Injectable()
export class AdminService {
    constructor(@InjectRepository(Admin)private adminRepository: Repository<Admin>
    //@Inject(forwardRef(() => adminRepository))private adminRepository: Repository<Admin>
    ) {}
    async create(createAdminDto: CreateAdminDto) {
        try {
            const admin = this.adminRepository.create(createAdminDto);
            return await this.adminRepository.save(admin);
        } catch (error) {
            console.error("Error: ",error); 
        }
    }

}
