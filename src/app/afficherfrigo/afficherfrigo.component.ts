import { Component, OnInit } from '@angular/core';
import { ElementFrigo } from '../model/ElementFrigo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ModifFrigoComponent } from '../modif-frigo/modif-frigo.component';
import { ServicefrigoService } from '../servicefrigo.service';
import { AjouterElementFrigoComponent } from '../ajouter-element-frigo/ajouter-element-frigo.component';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Liste } from '../model/Liste';
import { Recette } from '../model/Recette';
import { AfficherunerecetteComponent } from '../afficherunerecette/afficherunerecette.component';
import { UnerecetteService } from '../unerecette.service';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { MessageService } from '../message.service';
import { Envie } from '../model/Envie';
import { MessageComponent } from '../message/message.component';


const ELEMENT_DATA: ElementFrigo[] = [];

@Component({
  selector: 'app-afficherfrigo',
  templateUrl: './afficherfrigo.component.html',
  styleUrls: ['./afficherfrigo.component.css']
})

export class AfficherfrigoComponent implements OnInit {

  message : String;

  visible = false;
  mesElementsFrigo;
  ef: ElementFrigo = new ElementFrigo();
  e;
  aj;
  element;
  dataSource = new MatTableDataSource<ElementFrigo>(ELEMENT_DATA);
  allRecettes;
  listeRecette : Liste = new Liste();
  ingCo = 2;

  dateAuj;
  nouvelleEnvie: Envie = new Envie();
  verifAjoutEnvie;

  taGueule(){
    var urlParams = [];
    window.location.search.replace("?", "").split("&").forEach(function (e, i) {
        var p = e.split("=");
        urlParams[p[0]] = p[1];
    });

    // We have all the params now -> you can access it by name
    console.log(urlParams["loaded"]);

    if(urlParams["loaded"]) {}else{

        let win = (window as any);
        win.location.search = '?loaded=1';
        //win.location.reload('?loaded=1');
    }
  }
  constructor(private http: HttpClient, private dialog: MatDialog, private dialog2: MatDialog, private dialog4: MatDialog,private router: Router,private ajoutService : ChoixajoutrecettelisteService,  private s: ServicefrigoService, private recetteService: UnerecetteService, private messageService : MessageService) { }

  ngOnInit() {

    this.taGueule();

    this.http.get(this.s.url+'elemFrigo_byUser/' + localStorage.getItem("id")).subscribe(
      data => {
        this.element = data;
        this.mesElementsFrigo = this.element;
        this.mesElementsFrigo.forEach(element => {
          if (element.ingredient.url === null) {
            element.ingredient.url = "https://image.flaticon.com/icons/svg/2169/2169159.svg";
          }
        });

      }
    )

    this.http.get(this.s.url+'elemFrigo_suggestions/' + localStorage.getItem("id") + "-" + this.ingCo).subscribe(
      data => {
        this.allRecettes = data;
      })


  }

  recetteComplete(){
    this.http.get(this.s.url+'recette-complete/' + localStorage.getItem("id")).subscribe(
      data => {
        this.allRecettes = data;
    })


  }


  validerNbIng(n){
    
    if(this.ingCo === 1 && n<0){

    }else{
      this.ingCo += n;
    }

    this.ngOnInit();

  }

  modifQuantite(e) {
    this.s.elemservice = e;
    const mydial = this.dialog.open(ModifFrigoComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  supprimerElementFrigo(e) {
    this.element = e;
    const del = this.http.delete(this.s.url+'elemFrigo/' + this.element.id).toPromise();

    del.then(
      data => {
        this.ngOnInit();
      }, err => {
      }
    );
  }

  VerifAjoutEnvie;
 
  ajouterElementFrigo() {
    //this.s.elemservice = aj;
    const mydiale = this.dialog.open(AjouterElementFrigoComponent);
    mydiale.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  afficherRecette(recette) {
    this.recetteService.recette = recette;
    const mydial3 = this.dialog.open(AfficherunerecetteComponent);
  }

  ajouterRecetteCourse(re){
    this.listeRecette.titre = re.titre;
    this.listeRecette.user.id= localStorage.id;
    this.ajoutService.recette=re;
    this.ajoutService.liste = this.listeRecette;
    
    const mydial2 = this.dialog2.open(ChoixajoutrecettelisteComponent);
  }

  ajouterEnvie(re) {
    this.dateAuj = this.maDate();
    this.nouvelleEnvie.date = this.dateAuj;
    this.nouvelleEnvie.recette = re;
    this.nouvelleEnvie.user.id = localStorage.id;
    const del = this.http.post('http://localhost:8087/envie', this.nouvelleEnvie).toPromise()
    del.then(data => {
      this.verifAjoutEnvie = data;
      console.log(data);
      console.log(this.verifAjoutEnvie);
      
      if (this.verifAjoutEnvie === null) {
        this.message = "Encore ?!";

      } else {
        this.message ="Recette ajoutée aux envies";

      
      }
      this.messageService.message =this.message;
      const mydial4 = this.dialog4.open(MessageComponent);
    });
    

  }

  maDate() {
    return new Date();
  }

}