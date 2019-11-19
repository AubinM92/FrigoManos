import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Liste } from '../model/Liste'
import { User } from '../model/User';
import { ElementListe } from '../model/ElementListe';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Ingredient } from '../model/Ingredient';
import { logging } from 'protractor';

@Component({
  selector: 'app-ajouter-element-liste',
  templateUrl: './ajouter-element-liste.component.html',
  styleUrls: ['./ajouter-element-liste.component.css']
})
export class AjouterElementListeComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  noms: string[] = [];
  filteredOptions: Observable<string[]>;
  ing;
  response;
  ingredient: Ingredient = new Ingredient();
  idIngredient: number = null;
  quantite;

  element: ElementListe = new ElementListe();

  constructor(public dialogRef: MatDialogRef<AjouterElementListeComponent>, private http: HttpClient) {}

  ngOnInit() {
    this.recupIngredients();
  }
  

  private _filter(value: string): string[] {

    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));

  }

recupIngredients(){
  this.filteredOptions = this.myControl.valueChanges
  .pipe(
    startWith(''),
    map(value => this._filter(value))
  );
  const del = this.http.get('http://localhost:8087/nom-ingredient').toPromise();
  del.then(
    data => {
      this.response = data;
      this.noms = this.response;
      this.noms.forEach(element => {this.options.push(element)});
    }, err => {
      console.log(err);
    }
  );
}

  fermer() {
    this.dialogRef.close();
  }

  valider() {

    const del = this.http.get('http://localhost:8087/nom-ingredient/'+ this.ing).toPromise();
  del.then(
    data => {
      this.response = data;
      this.idIngredient = this.response;
      if(this.idIngredient!=null){
        this.enregistrer();
      }
    }, err => {
      console.log(err);
    }
  );

  }

enregistrer(){
  this.element.quantite = this.quantite;
  this.element.ingredient.id = this.idIngredient;
  this.element.liste.id = parseInt(localStorage.getItem("vueListe"));

    this.http.post('http://localhost:8087/elemListe', this.element).subscribe(
      datas=>{
        this.dialogRef.close();
    })

    
}

}
