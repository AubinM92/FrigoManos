import { Component, OnInit } from '@angular/core';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { Liste } from '../model/Liste';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-choixajoutrecetteliste',
  templateUrl: './choixajoutrecetteliste.component.html',
  styleUrls: ['./choixajoutrecetteliste.component.css']
})
export class ChoixajoutrecettelisteComponent implements OnInit {
laRecette;
LaListeRecette : Liste = new Liste();
  constructor(private s : ServicefrigoService,private ajoutService: ChoixajoutrecettelisteService, private http: HttpClient, public dialogRef: MatDialogRef<ChoixajoutrecettelisteComponent>) { }

  ngOnInit() {
    this.laRecette =this.ajoutService.recette;
    this.LaListeRecette = this.ajoutService.liste;
  }

  ajoutTousIngredient(){
    this.http.post(this.s.url+'listeRecette/'+this.laRecette.id, this.LaListeRecette).subscribe(data => { 
    });
    this.dialogRef.close();
  }

  ajoutIngredientManquant(){
    this.LaListeRecette.titre = this.laRecette.titre + "*";
    this.http.post(this.s.url+'listeRecetteManquant/'+this.laRecette.id, this.LaListeRecette).subscribe(data => { 
    });
    this.dialogRef.close();

  }


  fermer() {
    this.dialogRef.close();
  }


}
