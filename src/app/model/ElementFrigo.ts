import { User } from './User';
import {Ingredient} from './Ingredient';

export class ElementFrigo{

id : number;
ingredient : Ingredient= new Ingredient;
user : User = new User();
quantite: number;

    constructor(

    ){}

    public ElementFrigo(user, ingredient, quantite){
        this.user = user;
        this.ingredient= ingredient;
        this.quantite= quantite;
    }


}