import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnerecetteService } from '../unerecette.service';
import { AfficherunerecetteComponent } from '../afficherunerecette/afficherunerecette.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Liste } from '../model/Liste';
import { Recette } from '../model/Recette';
import { Envie } from '../model/Envie';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';


@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  lesElementRecette;
  recetteChoix : Recette = new Recette();
  allRecettes;
  listeRecette : Liste = new Liste();
  
  dateAuj;
  nouvelleEnvie : Envie = new Envie();
  recetteEnvie;
  message;
  VerifAjoutEnvie;

  constructor(private http: HttpClient, private recetteService : UnerecetteService,private ajoutService: ChoixajoutrecettelisteService, private dialog: MatDialog,private dialog2: MatDialog) { }

  ngOnInit() {
    this.http.get('http://localhost:8087/recette').subscribe(
      data => {
        this.allRecettes = data;
      })
      
  }

  afficherRecette(recette){
    this.recetteService.recette = recette;
    const mydial3 = this.dialog.open(AfficherunerecetteComponent);
  }

  ajouterRecetteCourse(re){


    

    this.listeRecette.titre = re.titre;
    this.listeRecette.user.id= localStorage.id;
    this.ajoutService.recette=re;
    this.ajoutService.liste = this.listeRecette;
    const mydial2 = this.dialog2.open(ChoixajoutrecettelisteComponent);
  
    /*this.http.post('http://localhost:8087/listeRecette/'+re.id, this.listeRecette).subscribe(data => { 
      }
    );*/

  }
  
  ajouterEnvie(re){

    this.dateAuj = this.maDate();

    
    this.nouvelleEnvie.date = this.dateAuj;
    this.nouvelleEnvie.recette = re;
    this.nouvelleEnvie.user.id = localStorage.id;
    console.log(this.nouvelleEnvie);
    const del = this.http.post('http://localhost:8087/envie', this.nouvelleEnvie).toPromise()
    del.then(data =>{
    this.VerifAjoutEnvie = data;

    });
    
    if(this.VerifAjoutEnvie !=null){
      this.message = "Recette ajoutée aux envies"
    } else {
      this.message = "Encore une fois ?!"
    }

  }

  maDate(){
    return new Date();
  }

}


