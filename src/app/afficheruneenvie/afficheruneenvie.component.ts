import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnerecetteService } from '../unerecette.service';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { MatDialog } from '@angular/material';
import { Liste } from '../model/Liste';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { UneenvieService } from '../uneenvie.service';

@Component({
  selector: 'app-afficheruneenvie',
  templateUrl: './afficheruneenvie.component.html',
  styleUrls: ['./afficheruneenvie.component.css']
})
export class AfficheruneenvieComponent implements OnInit {

  laRecette;
  elemLaRecette;
  mesElementsFrigo = [];
  mesElementsF = [];
  visibleFait = false;

  iddelEnvie;
  lEnvie;

  element;
  trouve = 0;
  pasAssez = 0;
  elemTrouve;

  listeRecette : Liste = new Liste();

  constructor(private recetteEnvie: UneenvieService,private recetteService: UnerecetteService, private http: HttpClient, private ajoutService: ChoixajoutrecettelisteService,private dialog2: MatDialog) { }

  ngOnInit() {

    this.premiere();

  }

  premiere() {
    this.lEnvie = this.recetteService.recette;
    const del = this.http.get('http://localhost:8087/recette/' + this.laRecette.id).toPromise();
    del.then(
      data => {
        this.laRecette = data;
        console.log(this.laRecette);
      })
    this.deuxieme();
  }

  deuxieme() {
    const del = this.http.get('http://localhost:8087/elemRecette/' + this.laRecette.id).toPromise();
    del.then(
      data => {
        this.elemLaRecette = data;
        console.log(this.elemLaRecette);
      })
    this.troisieme();
  }

  troisieme() {
    const del = this.http.get('http://localhost:8087/elemFrigo_byUser/' + localStorage.getItem("id")).toPromise();
    del.then(
      data => {
        this.element = data;
        this.mesElementsFrigo = this.element;
        this.mesElementsF = this.mesElementsFrigo;
        console.log(this.mesElementsFrigo);
      }
    )
  }

  ajouterRecetteCourse(re){
    this.listeRecette.titre = re.titre;
    this.listeRecette.user.id= localStorage.id;
    this.ajoutService.recette=re;
    this.ajoutService.liste = this.listeRecette;
    const mydial2 = this.dialog2.open(ChoixajoutrecettelisteComponent);
  }

}
