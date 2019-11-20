import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnerecetteService } from '../unerecette.service';
import { AfficherunerecetteComponent } from '../afficherunerecette/afficherunerecette.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  allRecettes;

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
}
