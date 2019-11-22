import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Ingredient } from '../model/Ingredient';
import { ElementFrigo } from '../model/ElementFrigo';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-ajouter-element-frigo',
  templateUrl: './ajouter-element-frigo.component.html',
  styleUrls: ['./ajouter-element-frigo.component.css']
})
export class AjouterElementFrigoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouterElementFrigoComponent>, private http: HttpClient, private s: ServicefrigoService) { }

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  response;
  ing;
  noms: string[]= [];
  options: string[] = [];
  ingredient: Ingredient = new Ingredient();
  idIngredient: number = null;
  quantite;

  element: ElementFrigo = new ElementFrigo();

  erreur;
  ngOnInit() {
    this.recupIngredients();
  }

  fermer() {
    this.dialogRef.close();
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

  valider() {

    const del = this.http.get('http://localhost:8087/nom-ingredient/'+ this.ing).toPromise();
  del.then(
    data => {
      this.response = data;
      this.idIngredient = this.response;
      if(this.idIngredient!=null){
        this.enregistrer();
      }else{
        this.erreur = "Elément non reconnu"
      }
    }, err => {
      console.log(err);
    }
  );

  }

enregistrer(){

    this.element.quantite = this.quantite;
    this.element.ingredient.nom = this.ing;
    this.element.ingredient.id = this.idIngredient;
    this.element.user.id = parseInt(localStorage.getItem("id"));
  
    const del = this.http.put('http://localhost:8087/elemFrigo', this.element).toPromise();

    del.then(
        datas=>{
          this.dialogRef.close();
      })

  }
}
