import { Component, OnInit } from '@angular/core';
import { UnerecetteService } from '../unerecette.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-afficherunerecette',
  templateUrl: './afficherunerecette.component.html',
  styleUrls: ['./afficherunerecette.component.css']
})
export class AfficherunerecetteComponent implements OnInit {
  laRecette;
  elemLaRecette;
  mesElementsFrigo = [];
  mesElementsF = [];

  element;
  trouve = 0;
  pasAssez = 0;
  elemTrouve;

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
        this.mesElementsF = this.mesElementsFrigo;
        console.log(this.mesElementsFrigo);
      }
    )
  }

  dansFrigo(elemR) {

    let info;
    this.mesElementsF.forEach(elementF => {
      if (elementF.ingredient.id === elemR.ingredient.id) {
        this.trouve = 1;
        this.elemTrouve = elementF;
        info = 'okJai';

      }
      else {
        info = 'jaiPas';
      }
    });

    console.log(info);
    return info;
  }

  dansFrigoPasAssez(elemRe) {
    this.dansFrigo(elemRe);
    if (this.elemTrouve.quantite < elemRe.quantite) {
      this.pasAssez = 1;
    }
  }
}
