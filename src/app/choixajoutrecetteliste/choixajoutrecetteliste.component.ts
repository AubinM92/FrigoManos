import { Component, OnInit } from '@angular/core';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { Liste } from '../model/Liste';

@Component({
  selector: 'app-choixajoutrecetteliste',
  templateUrl: './choixajoutrecetteliste.component.html',
  styleUrls: ['./choixajoutrecetteliste.component.css']
})
export class ChoixajoutrecettelisteComponent implements OnInit {
laRecette;
LaListeRecette : Liste = new Liste();
  constructor(private ajoutService: ChoixajoutrecettelisteService, private http: HttpClient, public dialogRef: MatDialogRef<ChoixajoutrecettelisteComponent>) { }

  ngOnInit() {
    this.laRecette =this.ajoutService.recette;
    this.LaListeRecette = this.ajoutService.liste;
  }

  ajoutTousIngredient(){
    this.http.post('http://localhost:8087/listeRecette/'+this.laRecette.id, this.LaListeRecette).subscribe(data => { 
    });
  }

  ajoutIngredientManquant(){

    this.http.post('http://localhost:8087/listeRecetteManquant/'+this.laRecette.id, this.LaListeRecette).subscribe(data => { 
    });

  }


  fermer() {
    this.dialogRef.close();
  }


}
