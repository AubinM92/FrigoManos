import { Component, OnInit } from '@angular/core';
import { ElementFrigo } from '../model/ElementFrigo';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-afficherfrigo',
  templateUrl: './afficherfrigo.component.html',
  styleUrls: ['./afficherfrigo.component.css']
})

export class AfficherfrigoComponent implements OnInit {

  mesElementsFrigo;
  ef: ElementFrigo = new ElementFrigo();
  element;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8087/elemFrigo/' + localStorage.getItem("id")).subscribe(
      data => {
        this.element = data;
        this.mesElementsFrigo = this.element;
        console.log(this.mesElementsFrigo);
      }
    )
  }

  /*supprimerElementFrigo(ef){
    const del = this.http.delete('http://localhost:8087/elemFrigo/'+ef.id).toPromise();
    
      del.then(x => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      });
}  */

  /*this.http.get('http://localhost:8087/elemFrigo/' + this.ingredient.nom, this.ingredient.nom).subscribe(
    reponse=> {
      this.data = reponse;
      console.log(this.data);}
  )*/

}
