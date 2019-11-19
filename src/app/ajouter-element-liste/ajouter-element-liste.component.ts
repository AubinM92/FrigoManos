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

  response;
  ingredient: Ingredient = new Ingredient();



  constructor(public dialogRef: MatDialogRef<AjouterElementListeComponent>, private http: HttpClient) {}

  ngOnInit() {
    this.recupIngredients();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  

  private _filter(value: string): string[] {

    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));

  }

recupIngredients(){
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
 
  }

}
