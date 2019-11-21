import { Recette } from './Recette';
import { User } from './User';

export class Envie{

    id : number;
    date : Date =new Date();
    recette : Recette =new Recette();
    user : User =new User();

        constructor(
    
        ){}
    }