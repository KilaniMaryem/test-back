import { IsNotEmpty, IsString } from "class-validator";


export class CreateVisiteurDto { 
    @IsNotEmpty()
    @IsString()
    username: string;
    
}