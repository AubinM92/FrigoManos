import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { del } from 'selenium-webdriver/http';
import { UneenvieService } from '../uneenvie.service';
import { MatDialog } from '@angular/material';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { Liste } from '../model/Liste';
import { AfficheruneenvieComponent } from '../afficheruneenvie/afficheruneenvie.component';
import { Envie } from '../model/Envie';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-afficherenvie',
  templateUrl: './afficherenvie.component.html',
  styleUrls: ['./afficherenvie.component.css']
})
export class AfficherenvieComponent implements OnInit {
  lenvie;
  lesRecettes;
  lesEnvies;
  user: User = new User();
  listeRecette: Liste = new Liste();
  constructor(private servicefrigo: ServicefrigoService,private http: HttpClient, private uneEnvieService: UneenvieService, private ajoutService: ChoixajoutrecettelisteService, private dialog: MatDialog, private dialog2: MatDialog) { }



  ngOnInit() {

    this.user.id = localStorage.id;
    console.log(this.user.id);
    this.http.get(this.servicefrigo.url + 'recetteByEnvieByUser/' + this.user.id).subscribe(
      data => {
        this.lesRecettes = data;
      })

    this.http.get(this.servicefrigo.url +'recetteByEnvieByUser/' + this.user.id).subscribe(
      data => {
        this.lesRecettes = data;
      })
  }

  afficherEnvie(re) {
    this.uneEnvieService.recette = re;
    const del = this.http.get(this.servicefrigo.url +'uneEnvieByRecette/' + re.id).toPromise();
    del.then(data => {
      this.lenvie = data;
      console.log(this.lenvie);
      this.uneEnvieService.envie = this.lenvie;
      const mydial = this.dialog.open(AfficheruneenvieComponent);
      mydial.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    })
  }

  ajouterRecetteCourse(re) {
    this.listeRecette.titre = re.titre;
    this.listeRecette.user.id = localStorage.id;
    this.ajoutService.recette = re;
    this.ajoutService.liste = this.listeRecette;
    const mydial2 = this.dialog2.open(ChoixajoutrecettelisteComponent);
  }

  deleteEnvie(re) {
    const del = this.http.get(this.servicefrigo.url +'uneEnvieByRecette/' + re.id).toPromise();
    del.then(data => {
      this.lenvie = data;
      this.uneEnvieService.envie = this.lenvie;
      console.log(this.lenvie)


      const del2 = this.http.delete(this.servicefrigo.url +'envie/' + this.lenvie.id).toPromise();
      del2.then(x => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      });

    });


  }

}
