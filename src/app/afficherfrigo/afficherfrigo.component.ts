import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Ingredient} from '../model/Ingredient';
import { Liste } from '../model/Liste';

@Component({
  selector: 'app-afficherfrigo',
  templateUrl: './afficherfrigo.component.html',
  styleUrls: ['./afficherfrigo.component.css']
})

export class AfficherfrigoComponent implements OnInit {

  user: User= new User();
  ingredient: Ingredient= new Ingredient();
  nom;
  data;
  http;
  retour;


  constructor() { }

  ngOnInit() {
  }

  afficherFrigo() {

    this.user.id = parseInt(localStorage.getItem("id"));

    this.ingredient.nom = this.nom;

    this.http.get('http://localhost:8087/elemFrigo/' + this.ingredient.nom, this.ingredient.nom).subscribe(
      reponse=> {
        this.data = reponse;
        console.log(this.data);}
    )

  }

}
