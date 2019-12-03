import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Ingredient } from '../model/Ingredient';
import { ElementFrigo } from '../model/ElementFrigo';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { ServicefrigoService } from '../servicefrigo.service';
import { ModifRecetteService } from '../modif-recette.service';
import { ElementRecette } from '../model/ElementRecette';
import { Recette } from '../model/Recette';
import { User } from '../model/User';

export class IngredientEtQuantite {
  ingredient: Ingredient;
  quantite: number;
}

export interface DialogData {
  message: string
}

@Component({
  selector: 'app-ajouter-element-recette',
  templateUrl: './ajouter-element-recette.component.html',
  styleUrls: ['./ajouter-element-recette.component.css']
})
export class AjouterElementRecetteComponent implements OnInit {


  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  response;
  noms: string[] = [];
  options: string[] = [];
  verifIngredient: Ingredient = new Ingredient();
  quantite;
  ing;
  listeIngredients: Ingredient[] = [];
  element: ElementFrigo = new ElementFrigo();
  erreur;
  

  retour: IngredientEtQuantite = new IngredientEtQuantite();

  constructor(
    private http: HttpClient, 
    public dialogRef: MatDialogRef<AjouterElementRecetteComponent>, 
    private s: ServicefrigoService, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

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

  recupIngredients() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    const del = this.http.get(this.s.url + 'nom-ingredient').toPromise();
    del.then(
      data => {
        this.response = data;
        this.noms = this.response;
        this.listeIngredients = this.response;
        this.noms.forEach(element => { this.options.push(element) });


      }, err => {
        console.log(err);
      }
    );
  }

  valider() {
    this.retour.quantite = this.quantite;
    const del = this.http.get(this.s.url + 'ingredient-info-nom/' + this.ing).toPromise();
    del.then(
      data => {
        this.response = data;
        this.verifIngredient = this.response;
        if (this.verifIngredient != null) {
          this.retour.quantite = this.quantite;
          this.retour.ingredient = this.verifIngredient;
          this.dialogRef.close(this.retour);
        } else {
          this.erreur = "Elément non reconnu"
        }
      }, err => {
        console.log(err);
      }
    );

  }
}
