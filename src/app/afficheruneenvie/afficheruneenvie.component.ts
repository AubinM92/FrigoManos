import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { MatDialog } from '@angular/material';
import { Liste } from '../model/Liste';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { UneenvieService } from '../uneenvie.service';
import { User } from '../model/User';

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
  lEnvie;
  envieDel;


  listeRecette: Liste = new Liste();

  constructor(private recetteEnvie: UneenvieService, private http: HttpClient, private ajoutService: ChoixajoutrecettelisteService, private dialog2: MatDialog) { }

  ngOnInit() {

    this.user.id = parseInt(localStorage.getItem("id"));
    this.premiere();

  }

  premiere() {
    this.lEnvie = this.recetteEnvie.recette;
    const del = this.http.get('http://localhost:8087/recette/' + this.lEnvie.id).toPromise();
    del.then(
      data => {
        this.lEnvie = data;
        console.log(this.lEnvie);
      })
    this.deuxieme();
  }

  deuxieme() {
    const del = this.http.get('http://localhost:8087/elemRecette/' + this.lEnvie.id).toPromise();
    del.then(
      data => {
        this.elemLaRecette = data;
        console.log(this.elemLaRecette);
      })
  }


  ajouterRecetteCourse(re) {
    this.listeRecette.titre = re.titre;
    this.listeRecette.user.id = localStorage.id;
    this.ajoutService.recette = re;
    this.ajoutService.liste = this.listeRecette;
    const mydial2 = this.dialog2.open(ChoixajoutrecettelisteComponent);
  }

  deleteEnvie(env) {
    this.envieDel = env;
    const del = this.http.delete('http://localhost:8087/envie/' + this.envieDel.id).toPromise();
    del.then(x => {
    }, err => {
      console.log(err);
    });
  }

}
