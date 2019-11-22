import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { del } from 'selenium-webdriver/http';
import { UneenvieService } from '../uneenvie.service';
import { MatDialog } from '@angular/material';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { Liste } from '../model/Liste';

@Component({
  selector: 'app-afficherenvie',
  templateUrl: './afficherenvie.component.html',
  styleUrls: ['./afficherenvie.component.css']
})
export class AfficherenvieComponent implements OnInit {
  lenvie;
  lesRecettes;
  user:User=new User();
  listeRecette: Liste = new Liste();
  constructor(private http: HttpClient, private uneEnvieService : UneenvieService,private ajoutService: ChoixajoutrecettelisteService, private dialog: MatDialog,private dialog2: MatDialog ) { }



  ngOnInit() {
    
    this.user.id=localStorage.id;
    console.log(this.user.id);
     this.http.get('http://localhost:8087/recetteByEnvieByUser/' +this.user.id).subscribe(
      data => {
        this.lesRecettes= data;
        console.log(this.lesRecettes);
      })
  }

  afficherEnvie(recette){
    this.uneEnvieService.recette = recette;
    this.http.get('http://localhost:8087/envieByRecette/' +recette.id).subscribe(
      data => {
        this.lenvie= data;
        console.log(this.lesRecettes);
      })
      this.uneEnvieService.envie = this.lenvie;
    const mydial = this.dialog.open(AfficherenvieComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  ajouterRecetteCourse(re){
    this.listeRecette.titre = re.titre;
    this.listeRecette.user.id= localStorage.id;
    this.ajoutService.recette=re;
    this.ajoutService.liste = this.listeRecette;
    const mydial2 = this.dialog2.open(ChoixajoutrecettelisteComponent);
  }

}
