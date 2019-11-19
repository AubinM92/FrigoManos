import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Liste } from '../model/Liste'
import { User } from '../model/User';
import { ElementListe } from '../model/ElementListe';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter-element-liste',
  templateUrl: './ajouter-element-liste.component.html',
  styleUrls: ['./ajouter-element-liste.component.css']
})
export class AjouterElementListeComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AjouterElementListeComponent>, private http: HttpClient) {}




  ngOnInit() {

  }


  fermer() {
    this.dialogRef.close();
  }

  recupIngredients() {


  }


  valider() {
 
  }

}
