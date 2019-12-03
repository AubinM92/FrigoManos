import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnerecetteService } from '../unerecette.service';
import { AfficherunerecetteComponent } from '../afficherunerecette/afficherunerecette.component';
import { MatDialogModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Liste } from '../model/Liste';
import { Recette } from '../model/Recette';
import { Envie } from '../model/Envie';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { ChoixajoutrecettelisteComponent } from '../choixajoutrecetteliste/choixajoutrecetteliste.component';
import { del } from 'selenium-webdriver/http';
import { Ingredient } from '../model/Ingredient';
import { ElementRecette } from '../model/ElementRecette';
import { ServicefrigoService } from '../servicefrigo.service';
import { CreerRecetteComponent } from '../creer-recette/creer-recette.component';
import { ModifRecetteService } from '../modif-recette.service';


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
  afficherCarteTypeRecette = true;
  typeBoFrigo;
  typeUtilisateur;
  typePersonnelle;
  carte: Recette = new Recette();

  dropdownSettings = {};
  dropdownTemps = [];
  selectedTemps = [];
  dropdownSaisons = [];
  selectedSaisons = [];
  dropdownTypes = [];
  selectedTypes = [];
  dropdownTypeRecette = [];
  selectedTypeRecette = [];

  constructor(private mr: ModifRecetteService, private s: ServicefrigoService, private http: HttpClient,
    private recetteService: UnerecetteService, private ajoutService: ChoixajoutrecettelisteService,
    private dialog: MatDialog, private dialog2: MatDialog, private dial4: MatDialog) { }

  listeIngredients: ElementRecette[];
  response;

  ngOnInit() {
    const del = this.http.get(this.s.url + 'elemRecette').toPromise();

    del.then(data => {
      this.response = data;
      this.listeIngredients = this.response;

      this.dropdownTypeRecette = [
        { item_id: 1, item_text: 'BôFrigo' },
        { item_id: 2, item_text: 'Utilisateur' },
        { item_id: 3, item_text: 'Personelle' }
      ];
      this.selectedTypeRecette = [
        { item_id: 1, item_text: 'BôFrigo' },
        { item_id: 2, item_text: 'Utilisateur' },
        { item_id: 3, item_text: 'Personnelle' }
      ];
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
      this.onSelectAllTypeRecette();

      this.http.get(this.s.url + 'recettes-user/' + localStorage.getItem("id")).subscribe(
        data => {
          this.allRecettes = data;
        })

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
    const del = this.http.post(this.s.url + 'envie', this.nouvelleEnvie).toPromise()
    del.then(data => {
      this.VerifAjoutEnvie = data;
    });
    if (this.VerifAjoutEnvie != null) {
      this.message = "Recette ajoutée aux envies"
    } else {
      this.message = "Encore une fois ?!"
    }
  }
  ajouterRecette() {
    this.mr.recette = new Recette();
    this.mr.recette.id = 0;
    this.mr.ingredients = null;

    const mydial4 = this.dialog.open(CreerRecetteComponent);
    mydial4.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
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
  onTypeRecetteSelect(item: any) {
    if (item.item_id == 1) { this.typeBoFrigo = true; }
    if (item.item_id == 2) { this.typeUtilisateur = true; }
    if (item.item_id == 3) { this.typePersonnelle = true; }
  }
  onTypeRecetteDeSelect(item: any) {
    if (item.item_id == 1) { this.typeBoFrigo = false; }
    if (item.item_id == 2) { this.typeUtilisateur = false; }
    if (item.item_id == 3) { this.typePersonnelle = false; }
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
  onSelectAllTypeRecette() {
    this.typeBoFrigo = true;
    this.typeUtilisateur = true;
    this.typePersonnelle = true;
  }
  onDeSelectAllTypeRecette() {
    this.typeBoFrigo = false;
    this.typeUtilisateur = false;
    this.typePersonnelle = false;
  }
  // Va chercher tous les ingrédients liés à une recette donnée
  getIngredients(rec: Recette) {
    const del = this.http.get(this.s.url + 'ingredient-via-recette/' + rec.id).toPromise();
    del.then(
      data => {
        this.allIngredients = data;
      }, err => {
        console.log(err);
      }
    );
  }

  affichageCarte(carte) {
    //let v1 = this.verifType(carte);
    let v1 = true
    //let v2 = this.verifSaison(carte);
    let v2 = true
    let v3 = this.verifDuree(carte);
    let v4 = this.verifTypeRecette(carte);
    return v1 && v2 && v3 && v4;
  }
  verifTypeRecette(carte){
    if ((this.typeBoFrigo || this.typePersonnelle || this.typeUtilisateur) === false) {
      return true
    }

    if(carte.user != null){
      if(this.typePersonnelle && carte.user.id === parseInt(localStorage.getItem("id"))){
        return true;
      }
      if(this.typeUtilisateur && carte.user.id != parseInt(localStorage.getItem("id"))){
        return true;
      }
    }else{
      if(this.typeBoFrigo){
        return true;
      }
    }

    return false;
  }
  verifType(recette) {

    if ((this.typeFruit || this.typePoisson || this.typeFruit || this.typeProduitL || this.typeViande) === false) {
      return true
    }

    this.listeIngredients.forEach(element => {
      if (recette.id === element.recette.id) {

        if (element.ingredient.categorie === "Fruit" && this.typeFruit) { return true; }
        if (element.ingredient.categorie === "Légume" && this.typeLegume) { return true; }
        if (element.ingredient.categorie === "Poisson" && this.typePoisson) { return true; }
        if (element.ingredient.categorie === "Produit laitier" && this.typeProduitL) { return true; }
        if (element.ingredient.categorie === "Viande" && this.typeViande) { return true; }

      }
    })

    return false;
  }

  verifDuree(carte) {

    if ((this.temps0015 || this.temps1530 || this.temps3045 || this.temps4560 || this.temps60) === false) {
      return true;
    }

    if ((carte.tempsPrepa + carte.tempsCuis) <= 15 && this.temps0015) { return true }
    if ((carte.tempsPrepa + carte.tempsCuis) > 15 && (carte.tempsPrepa + carte.tempsCuis) <= 30 && this.temps1530) { return true }
    if ((carte.tempsPrepa + carte.tempsCuis) > 30 && (carte.tempsPrepa + carte.tempsCuis) <= 45 && this.temps3045) { return true }
    if ((carte.tempsPrepa + carte.tempsCuis) > 45 && (carte.tempsPrepa + carte.tempsCuis) <= 60 && this.temps4560) { return true }
    if ((carte.tempsPrepa + carte.tempsCuis) > 60 && this.temps60) { return true }

    return false;

  }

  verifSaison(recette) {

    if ((this.saisonAutomne || this.saisonEte || this.saisonHiver || this.saisonPrintemps) === false) {
      return true
    }

    this.listeIngredients.forEach(element => {
      if (recette.id === element.recette.id) {
        if (element.ingredient.saison === "Printemps" && this.saisonPrintemps) { return true; }
        if (element.ingredient.saison === "Été" && this.saisonEte) { return true; }
        if (element.ingredient.saison === "Automne" && this.saisonAutomne) { return true; }
        if (element.ingredient.saison === "Hiver" && this.saisonHiver) { return true; }

      }
    })
    return false;
  }

  couleurCarte(re) {
    if (re.user === null) {
      return 'white';
    }
    return re.user.id === parseInt(localStorage.getItem("id")) ? 'rgb(230, 230, 230)' : 'white';
  }

  listePerso(re) {
    if (re.user === null) {
      return false
    }
    return re.user.id === parseInt(localStorage.getItem("id")) ? true : false;
  }

  //---------------------Modification d'une recette, prend en paramètre une recette
  modif(re) {
    const dial = this.dial4.open(CreerRecetteComponent, {
      data: { recette: re }
    });
  }
  //---------------------Suppresion d'une recette, prend en paramètre une recette
  supprimer(re) {

  }
}
