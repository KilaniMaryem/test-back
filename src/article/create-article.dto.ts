import { IsNotEmpty, IsString } from "class-validator";


export class CreateArticleDto { 
    @IsNotEmpty()
    @IsString()
    titre: string;


    @IsNotEmpty()
    @IsString()
    contenu : string

    @IsNotEmpty()
    @IsString()
    auteurname : string

    

}