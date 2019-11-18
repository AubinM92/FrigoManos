export class Ingredient {

    id: number;
    nom: string;
    unite: string;
    saison: string;
    categorie: string;

    constructor(

    ) { }

    public Ingredient(nom, unite, saison, categorie) {
        this.nom = nom;
        this.unite = unite;
        this.saison = saison;
        this.categorie = categorie;
    }

}
