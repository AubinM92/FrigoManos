import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { MatDialog } from '@angular/material';
import { Liste } from '../model/Liste';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { UneenvieService } from '../uneenvie.service';
import { User } from '../model/User';
import { Envie } from '../model/Envie';

@Component({
  selector: 'app-afficheruneenvie',
  templateUrl: './afficheruneenvie.component.html',
  styleUrls: ['./afficheruneenvie.component.css']
})
export class AfficheruneenvieComponent implements OnInit {

  user: User = new User();

  elemLaRecette;
  mesElementsFrigo = [];
  mesElementsF = [];
  visibleFait = false;

  iddelEnvie;
  laRecetteEnvie;
  envieDel;
  lEnvie : Envie = new Envie();


  listeRecette: Liste = new Liste();

  constructor(private recetteEnvie: UneenvieService, private http: HttpClient, private ajoutService: ChoixajoutrecettelisteService, private dialog2: MatDialog) { }

  ngOnInit() {

    this.user.id = parseInt(localStorage.getItem("id"));
    this.lEnvie = this.recetteEnvie.envie;
    this.premiere();
  

  }

  premiere() {
    this.laRecetteEnvie = this.recetteEnvie.recette;
    this.deuxieme();
  }

  deuxieme() {
    const del = this.http.post('http://localhost:8087/elem-recette-plus/' + this.laRecetteEnvie.id, this.user).toPromise();
    del.then(
      data => {
        this.elemLaRecette = data;
       
       
      })
  }


  ajouterRecetteCourse() {
    this.listeRecette.titre = this.laRecetteEnvie.titre;
    this.listeRecette.user.id = localStorage.id;
    this.ajoutService.recette = this.laRecetteEnvie;
    this.ajoutService.liste = this.listeRecette;
    console.log(this.laRecetteEnvie);
    const mydial2 = this.dialog2.open(ChoixajoutrecettelisteComponent);
  }

  deleteEnvie() {
  
    
    const del = this.http.delete('http://localhost:8087/envie/' + this.lEnvie.id).toPromise();
    del.then(x => {
    }, err => {
      console.log(err);
    });
  }

}
