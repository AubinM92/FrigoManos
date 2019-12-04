import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-liste-ingredient',
  templateUrl: './liste-ingredient.component.html',
  styleUrls: ['./liste-ingredient.component.css']
})
export class ListeIngredientComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private s : ServicefrigoService
  ) {
   }

  listeIngredient = [];
  response;
  ngOnInit() {
    const del = this.http.get(this.s.url + '/ingredient').toPromise();
    del.then(data =>{
      this.response = data;
      this.listeIngredient = this.response;
    })
  }

}
