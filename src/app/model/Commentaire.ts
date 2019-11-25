import { Recette } from './Recette';
import { User } from './User';

export class Commentaire{

    id : number;
    date : Date =new Date();
    leCommentaire :String;
    recette : Recette =new Recette();
    user : User =new User();

    constructor(
        
    ){}

}