import { User } from './User';

export class Liste{

id : number;
titre : string;
user : User = new User();

    constructor(

    ){}

    public Liste(titre,user){
        this.titre = titre;
        this.user = user;
    }


}