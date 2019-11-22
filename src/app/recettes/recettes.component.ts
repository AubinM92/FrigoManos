import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnerecetteService } from '../unerecette.service';
import { AfficherunerecetteComponent } from '../afficherunerecette/afficherunerecette.component';
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Liste } from '../model/Liste';
import { Recette } from '../model/Recette';
import { Envie } from '../model/Envie';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { del } from 'selenium-webdriver/http';


@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  lesElementRecette;
  recetteChoix: Recette = new Recette();
  allRecettes;
  listeRecette: Liste = new Liste();
  allIngredients;

  elem;
  dateAuj;
  nouvelleEnvie: Envie = new Envie();
  recetteEnvie;
  message;
  VerifAjoutEnvie;

  afficherCarteTemps = true;
  temps0015;
  temps1530;
  temps3045;
  temps4560;
  temps60;
  afficherCarteSaison = true;
  saisonPrintemps;
  saisonEte;
  saisonAutomne;
  saisonHiver;
  afficherCarteType = true;
  typeFruit;
  typeLegume;
  typePoisson;
  typeProduitL;
  typeViande;
  carte: Recette = new Recette();

  dropdownSettings = {};
  dropdownTemps = [];
  selectedTemps = [];
  dropdownSaisons = [];
  selectedSaisons = [];
  dropdownTypes = [];
  selectedTypes = [];

  constructor(private http: HttpClient, private recetteService: UnerecetteService, private ajoutService: ChoixajoutrecettelisteService, private dialog: MatDialog, private dialog2: MatDialog) { }

  ngOnInit() {

    this.dropdownSaisons = [
      { item_id: 1, item_text: 'Printemps' },
      { item_id: 2, item_text: 'Été' },
      { item_id: 3, item_text: 'Automne' },
      { item_id: 4, item_text: 'Hiver' }
    ];
    this.selectedSaisons = [
      { item_id: 1, item_text: 'Printemps' },
      { item_id: 2, item_text: 'Été' },
      { item_id: 3, item_text: 'Automne' },
      { item_id: 4, item_text: 'Hiver' }
    ];
    this.dropdownTemps = [
      { item_id: 1, item_text: '0 - 15 min' },
      { item_id: 2, item_text: '15 - 30 min' },
      { item_id: 3, item_text: '30 - 45 min' },
      { item_id: 4, item_text: '45 - 60 min' },
      { item_id: 5, item_text: '> 60 min' }
    ];
    this.selectedTemps = [
      { item_id: 1, item_text: '0 - 15 min' },
      { item_id: 2, item_text: '15 - 30 min' },
      { item_id: 3, item_text: '30 - 45 min' },
      { item_id: 4, item_text: '45 - 60 min' },
      { item_id: 5, item_text: '> 60 min' }
    ];
    this.dropdownTypes = [
      { item_id: 1, item_text: 'Fruit' },
      { item_id: 2, item_text: 'Légume' },
      { item_id: 3, item_text: 'Poisson' },
      { item_id: 4, item_text: 'Produit laitier' },
      { item_id: 5, item_text: 'Viande' }
    ];
    this.selectedTypes = [
      { item_id: 1, item_text: 'Fruit' },
      { item_id: 2, item_text: 'Légume' },
      { item_id: 3, item_text: 'Poisson' },
      { item_id: 4, item_text: 'Produit laitier' },
      { item_id: 5, item_text: 'Viande' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Tout sélectionner',
      unSelectAllText: 'Tout désélectionner',
      itemsShowLimit: 10,
      allowSearchFilter: false
    }

    this.onSelectAllTemps();
    this.onSelectAllSaison();
    this.onSelectAllType();

    this.http.get('http://localhost:8087/recette').subscribe(
      data => {
        this.allRecettes = data;
      })
  }

  afficherRecette(recette) {
    this.recetteService.recette = recette;
    const mydial3 = this.dialog.open(AfficherunerecetteComponent);
  }

  ajouterRecetteCourse(re) {
    this.listeRecette.titre = re.titre;
    this.listeRecette.user.id = localStorage.id;
    this.ajoutService.recette = re;
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
      this.VerifAjoutEnvie = data;
    });
    if (this.VerifAjoutEnvie != null) {
      this.message = "Recette ajoutée aux envies"
    } else {
      this.message = "Encore une fois ?!"
    }
  }

  maDate() {
    return new Date();
  }

  // Fonctions pour le filtrage du temps de cuisine
  onTempsSelect(item: any) {
    if (item.item_id == 1) { this.temps0015 = true; }
    if (item.item_id == 2) { this.temps1530 = true; }
    if (item.item_id == 3) { this.temps3045 = true; }
    if (item.item_id == 4) { this.temps4560 = true; }
    if (item.item_id == 5) { this.temps60 = true; }
  }
  onTempsDeSelect(item: any) {
    if (item.item_id == 1) { this.temps0015 = false; }
    if (item.item_id == 2) { this.temps1530 = false; }
    if (item.item_id == 3) { this.temps3045 = false; }
    if (item.item_id == 4) { this.temps4560 = false; }
    if (item.item_id == 5) { this.temps60 = false; }
  }
  onSelectAllTemps() {
    this.temps0015 = true;
    this.temps1530 = true;
    this.temps3045 = true;
    this.temps4560 = true;
    this.temps60 = true;
  }
  onDeSelectAllTemps() {
    this.temps0015 = false;
    this.temps1530 = false;
    this.temps3045 = false;
    this.temps4560 = false;
    this.temps60 = false;
  }

  // Fonctions pour le filtrage des saisons
  onSaisonSelect(item: any) {
    if (item.item_id == 1) { this.saisonPrintemps = true; }
    if (item.item_id == 2) { this.saisonEte = true; }
    if (item.item_id == 3) { this.saisonAutomne = true; }
    if (item.item_id == 4) { this.saisonHiver = true; }
  }
  onSaisonDeSelect(item: any) {
    if (item.item_id == 1) { this.saisonPrintemps = false; }
    if (item.item_id == 2) { this.saisonEte = false; }
    if (item.item_id == 3) { this.saisonAutomne = false; }
    if (item.item_id == 4) { this.saisonHiver = false; }
  }
  onSelectAllSaison() {
    this.saisonPrintemps = true;
    this.saisonEte = true;
    this.saisonAutomne = true;
    this.saisonHiver = true;
  }
  onDeSelectAllSaison() {
    this.saisonPrintemps = false;
    this.saisonEte = false;
    this.saisonAutomne = false;
    this.saisonHiver = false;
  }

  // Fonctions pour le filtrage des types d'ingrédients
  onTypeSelect(item: any) {
    if (item.item_id == 1) { this.typeFruit = true; }
    if (item.item_id == 2) { this.typeLegume = true; }
    if (item.item_id == 3) { this.typePoisson = true; }
    if (item.item_id == 4) { this.typeProduitL = true; }
    if (item.item_id == 5) { this.typeViande = true; }
  }
  onTypeDeSelect(item: any) {
    if (item.item_id == 1) { this.typeFruit = false; }
    if (item.item_id == 2) { this.typeLegume = false; }
    if (item.item_id == 3) { this.typePoisson = false; }
    if (item.item_id == 4) { this.typeProduitL = false; }
    if (item.item_id == 5) { this.typeViande = false; }
  }
  onSelectAllType() {
    this.typeFruit = true;
    this.typeLegume = true;
    this.typePoisson = true;
    this.typeProduitL = true;
    this.typeViande = true;
  }
  onDeSelectAllType() {
    this.typeFruit = false;
    this.typeLegume = false;
    this.typePoisson = false;
    this.typeProduitL = false;
    this.typeViande = false;
  }

  // Va chercher tous les ingrédients liés à une recette donnée
  getIngredients(rec: Recette) {
    const del = this.http.get('http://localhost:8087/ingredient-via-recette/' + rec.id).toPromise();
    del.then(
      data => {
        this.allIngredients = data;
      }, err => {
        console.log(err);
      }
    );
  }

  affichageCarte(carte) {

    // Vérification du temps de cuisine
    if ((carte.tempsPrepa + carte.tempsCuis) <= 15 && this.temps0015) { return true; }
    if ((carte.tempsPrepa + carte.tempsCuis) > 15 && (carte.tempsPrepa + carte.tempsCuis) <= 30 && this.temps1530) { return true; }
    if ((carte.tempsPrepa + carte.tempsCuis) > 30 && (carte.tempsPrepa + carte.tempsCuis) <= 45 && this.temps3045) { return true; }
    if ((carte.tempsPrepa + carte.tempsCuis) > 45 && (carte.tempsPrepa + carte.tempsCuis) <= 60 && this.temps4560) { return true; }
    if ((carte.tempsPrepa + carte.tempsCuis) > 60 && this.temps60) { return true; }
    else { return false; }

    /*
    // Vérification du temps de cuisine
    if ((carte.tempsPrepa + carte.tempsCuis) <= 15 && this.temps0015) { this.afficherCarteTemps = true; }
    if ((carte.tempsPrepa + carte.tempsCuis) > 15 && (carte.tempsPrepa + carte.tempsCuis) <= 30 && this.temps1530) { this.afficherCarteTemps = true; }
    if ((carte.tempsPrepa + carte.tempsCuis) > 30 && (carte.tempsPrepa + carte.tempsCuis) <= 45 && this.temps3045) { this.afficherCarteTemps = true; }
    if ((carte.tempsPrepa + carte.tempsCuis) > 45 && (carte.tempsPrepa + carte.tempsCuis) <= 60 && this.temps4560) { this.afficherCarteTemps = true; }
    if ((carte.tempsPrepa + carte.tempsCuis) > 60 && this.temps60) { this.afficherCarteTemps = true; }
    else { this.afficherCarteTemps = false; }*/

    /*
    const del = this.http.get('http://localhost:8087/ingredient-via-recette/' + carte.id).toPromise();
    del.then(
      data => {
        this.allIngredients = data;

        // Vérification de la saison
        this.allIngredients.forEach(element => {
          if (element.saison == "Toutes") { this.afficherCarteSaison = true; }
          if (element.saison == "Printemps" && this.saisonPrintemps) { this.afficherCarteSaison = true; }
          if (element.saison == "Été" && this.saisonEte) { this.afficherCarteSaison = true; }
          if (element.saison == "Automne" && this.saisonAutomne) { this.afficherCarteSaison = true; }
          if (element.saison == "Hiver" && this.saisonHiver) { this.afficherCarteSaison = true; }
          else { this.afficherCarteSaison = false; }
        });

        // Vérification du type d'ingrédient
        this.allIngredients.forEach(element => {
          if (element.categorie == "Fruit" && this.typeFruit) { this.afficherCarteType = true; }
          if (element.categorie == "Légume" && this.typeLegume) { this.afficherCarteType = true; }
          if (element.categorie == "Poisson" && this.typePoisson) { this.afficherCarteType = true; }
          if (element.categorie == "Produit laitier" && this.typeProduitL) { this.afficherCarteType = true; }
          if (element.categorie == "Viande" && this.typeViande) { this.afficherCarteType = true; }
          else { this.afficherCarteType = false; }
        });

      }, err => {
        console.log(err);
      }
    );*/
  }
}


