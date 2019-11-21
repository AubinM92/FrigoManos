import { Component, OnInit } from '@angular/core';
import { UnerecetteService } from '../unerecette.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-afficherunerecette',
  templateUrl: './afficherunerecette.component.html',
  styleUrls: ['./afficherunerecette.component.css']
})
export class AfficherunerecetteComponent implements OnInit {
  laRecette;
  elemLaRecette;
  mesElementsFrigo = [];
  mesElements = [];

  element;
  trouve = 0;

  constructor(private recetteService: UnerecetteService, private http: HttpClient) { }

  ngOnInit() {

    this.premiere();

  }

  premiere() {
    this.laRecette = this.recetteService.recette;
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
        this.mesElements = this.mesElementsFrigo;
        console.log(this.mesElementsFrigo);
      }
    )
  }

  dansFrigo(elemR) {
    this.mesElements.forEach(elementF => {
      if (elementF.ingredient.id === elemR.ingredient.id) {
        this.trouve = 1;
      }
    });
    return this.trouve;

  }

}
