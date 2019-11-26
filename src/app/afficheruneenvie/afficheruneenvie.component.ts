import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { MatDialog } from '@angular/material';
import { Liste } from '../model/Liste';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { UneenvieService } from '../uneenvie.service';
import { User } from '../model/User';
import { Envie } from '../model/Envie';
import { Commentaire } from '../model/Commentaire';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-afficheruneenvie',
  templateUrl: './afficheruneenvie.component.html',
  styleUrls: ['./afficheruneenvie.component.css']
})
export class AfficheruneenvieComponent implements OnInit {

  user: User = new User();

visible = false;

  elemLaRecette;
  mesElementsFrigo = [];
  mesElementsF = [];
  visibleFait = false;

  iddelEnvie;
  laRecetteEnvie;
  recetteCuisinee;
  envieDel;
  lEnvie: Envie = new Envie();
  efr;
  array;

  nouvCom : Commentaire = new Commentaire();
  nombreCom
  lesCommentaires;

  listeRecette: Liste = new Liste();

  constructor(private s: ServicefrigoService,private recetteEnvieService: UneenvieService, private http: HttpClient, private ajoutService: ChoixajoutrecettelisteService, private dialog2: MatDialog) { }

  ngOnInit() {

    this.user.id = parseInt(localStorage.getItem("id"));
    this.lEnvie = this.recetteEnvieService.envie;
    this.premiere();
    this.getCommentaires();


  }

  premiere() {
    this.laRecetteEnvie = this.recetteEnvieService.recette;
    this.deuxieme();
  }

  deuxieme() {
    const del = this.http.post(this.s.url+'elem-recette-plus/' + this.laRecetteEnvie.id, this.user).toPromise();
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
    
    const mydial2 = this.dialog2.open(ChoixajoutrecettelisteComponent);
  }
  
  deleteEnvie() {
    const del = this.http.delete(this.s.url+'envie/' + this.lEnvie.id).toPromise();
    del.then(x => {
    }, err => {
      console.log(err);
    });
  }

  recetteRealisee() {

        const del2 = this.http.put(this.s.url+'elemFrigoCompare_Avec_Recette/' + this.lEnvie.id, this.lEnvie).toPromise();
        del2.then(data =>{
          this.ngOnInit();
        })


    }

    afficherLesCommentaires(){
      this.visible=true;
  
    }
  
    ajoutCommentaire(){
      this.nouvCom.date= new Date();
      
      this.nouvCom.user.id = localStorage.id;
      this.nouvCom.recette = this.laRecetteEnvie;
      
      const del = this.http.post(this.s.url+'commentaire' ,this.nouvCom).toPromise();
        del.then(data => { 
          this.ngOnInit();
        });
    }
  
    getCommentaires(){
      
      const del = this.http.get(this.s.url+'comByRecetteId/' +  this.laRecetteEnvie.id).subscribe(
        data => {
          this.lesCommentaires=data;
          this.nombreCom=this.lesCommentaires.length;
        });
    }

}
