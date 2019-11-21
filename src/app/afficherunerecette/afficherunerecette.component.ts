import { Component, OnInit } from '@angular/core';
import { UnerecetteService } from '../unerecette.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ElementFinder } from 'protractor';
import { Envie } from '../model/Envie';
import { Liste } from '../model/Liste';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { User } from '../model/User';

@Component({
  selector: 'app-afficherunerecette',
  templateUrl: './afficherunerecette.component.html',
  styleUrls: ['./afficherunerecette.component.css']
})
export class AfficherunerecetteComponent implements OnInit {
  
  user: User = new User();

  laRecette;
  elemLaRecette;
  mesElementsFrigo = [];
  mesElementsF = [];

  element;
  trouve = 0;
  pasAssez = 0;
  elemTrouve;

  dateAuj;
  nouvelleEnvie : Envie = new Envie();
  recetteEnvie;
  message;
  VerifAjoutEnvie;
  listeRecette : Liste = new Liste();


  constructor(private recetteService: UnerecetteService, private http: HttpClient, private ajoutService: ChoixajoutrecettelisteService,private dialog2: MatDialog) { }

  ngOnInit() {

    this.user.id = parseInt(localStorage.getItem("id"));
    this.premiere();

  }

  premiere() {
    this.laRecette = this.recetteService.recette;
    const del = this.http.get('http://localhost:8087/recette/' + this.laRecette.id).toPromise();
    del.then(
      data => {
        this.laRecette = data;
      })
    this.deuxieme();
  }

  deuxieme() {
    const del = this.http.post('http://localhost:8087/elem-recette-plus/' + this.laRecette.id, this.user).toPromise();
    del.then(
      data => {
        this.elemLaRecette = data;
      })
  }

  ajouterEnvie(re){
    this.dateAuj = this.maDate();
    this.nouvelleEnvie.date = this.dateAuj;
    this.nouvelleEnvie.recette = re;
    this.nouvelleEnvie.user.id = localStorage.id;
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

  ajouterRecetteCourse(re){
    this.listeRecette.titre = re.titre;
    this.listeRecette.user.id= localStorage.id;
    this.ajoutService.recette=re;
    this.ajoutService.liste = this.listeRecette;
    const mydial2 = this.dialog2.open(ChoixajoutrecettelisteComponent);
  }

  maDate(){
    return new Date();
  }
}
