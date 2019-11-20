import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnerecetteService } from '../unerecette.service';
import { AfficherunerecetteComponent } from '../afficherunerecette/afficherunerecette.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Liste } from '../model/Liste';
import { Recette } from '../model/Recette';

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
  listeRecetteReturn;
  dateAuj;

  constructor(private http: HttpClient, private recetteService : UnerecetteService, private dialog: MatDialog) { }

  ngOnInit() {
    this.http.get('http://localhost:8087/recette').subscribe(
      data => {
        this.allRecettes = data;
        console.log(this.allRecettes);
      })
  }

  afficherRecette(recette){
    this.recetteService.recette = recette;
    const mydial3 = this.dialog.open(AfficherunerecetteComponent);
  }

  ajouterRecetteCourse(re){
    this.recetteChoix.id= re.id;
    this.recetteChoix.description= re.description;
    this.recetteChoix.temps_cuis= re.temps_cuis;
    this.recetteChoix.temps_prepa= re.temps_prepa;
    this.recetteChoix.titre= re.titre;



    this.listeRecette.titre = re.titre;
    this.listeRecette.user.id= localStorage.id;

    this.http.post('http://localhost:8087/listeRecette', this.listeRecette).subscribe(data => {
        this.listeRecetteReturn = data;
        console.log(this.listeRecetteReturn);
      }
    );

  }
  
  ajouterListeEnvie(recette){
    this.dateAuj = new Date();


  }


}


