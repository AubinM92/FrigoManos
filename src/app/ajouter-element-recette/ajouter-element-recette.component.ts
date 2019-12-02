import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Ingredient } from '../model/Ingredient';
import { ElementFrigo } from '../model/ElementFrigo';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { ServicefrigoService } from '../servicefrigo.service';
import { ModifRecetteService } from '../modif-recette.service';
import { ElementRecette } from '../model/ElementRecette';
import { Recette } from '../model/Recette';
import { User } from '../model/User';

@Component({
  selector: 'app-ajouter-element-recette',
  templateUrl: './ajouter-element-recette.component.html',
  styleUrls: ['./ajouter-element-recette.component.css']
})
export class AjouterElementRecetteComponent implements OnInit {


  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  response;
  ing;
  noms: string[]= [];
  options: string[] = [];
  verifIngredient: Ingredient = new Ingredient();
  quantite;
  listeIngredients: Ingredient[]=[];
  element: ElementFrigo = new ElementFrigo();
  erreur;
  
  constructor(private http : HttpClient, public dialogRef: MatDialogRef<AjouterElementRecetteComponent>, private s : ServicefrigoService, private mr : ModifRecetteService) { }

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
    const del = this.http.get(this.s.url+'nom-ingredient').toPromise();
    del.then(
      data => {
        this.response = data;
        this.noms = this.response;
        this.listeIngredients = this.response;
        this.noms.forEach(element => {this.options.push(element)});

        
      }, err => {
        console.log(err);
      }
    );
  }

  valider() {
    

    const del = this.http.get(this.s.url+'ingredient-info-nom/'+ this.ing).toPromise();
  del.then(
    data => {
      this.response = data;
      this.verifIngredient = this.response;
      if(this.verifIngredient.id!=null){
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

    this.mr.elem = new ElementRecette();
    this.mr.elem.ingredient = this.verifIngredient;
    this.mr.elem.quantite = this.quantite;

    this.dialogRef.close();


  }

}
