import { Component, OnInit, Inject } from '@angular/core';
import { ServicefrigoService } from '../servicefrigo.service';
import { MatDialogRef, MatTableDataSource, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Recette } from '../model/Recette';
import { User } from '../model/User';
import { ModifRecetteService } from '../modif-recette.service';
import { Ingredient } from '../model/Ingredient';
import { ElementRecette } from '../model/ElementRecette';
import { SelectionModel } from '@angular/cdk/collections';
import { AjouterElementRecetteComponent, IngredientEtQuantite } from '../ajouter-element-recette/ajouter-element-recette.component';

export interface DialogData {
  recette: Recette
}

@Component({
  selector: 'app-creer-recette',
  templateUrl: './creer-recette.component.html',
  styleUrls: ['./creer-recette.component.css']
})
export class CreerRecetteComponent implements OnInit {

  constructor(
    private s: ServicefrigoService,
    public dialogRef: MatDialogRef<CreerRecetteComponent>,
    private http: HttpClient,
    private router: Router,
    private myDial: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    if (this.data != null) {
      this.recette = this.data.recette;
      this.recupIngredients();
      console.log('ouverture')
    }
  }

  //------------------------Récupération des ingrédients de la recette
  response;
  listeElementsRecette = [];
  recupIngredients() {
    console.log(100)
    const del = this.http.get("http://localhost:8087/elemRecette/" + this.recette.id).toPromise();
    del.then(data => {
      this.response = data;
      this.response.forEach(element => {
        this.listeElementsRecette.push(element);
      });

    })
  }
  //------------------------Ajout d'un élément recette au mat tableau
  retour: IngredientEtQuantite = new IngredientEtQuantite();
  elemRecette: ElementRecette = new ElementRecette();
  ajouterIngredient() {
    const myDial = this.myDial.open(AjouterElementRecetteComponent, {
      data: { message: 'Ajouter un ingrédient à la recette' }
    })
    myDial.afterClosed().subscribe(result => {
      this.retour = result;

      if (this.retour != undefined) {

        this.elemRecette = new ElementRecette();
        this.elemRecette.ingredient = this.retour.ingredient;
        this.elemRecette.quantite = this.retour.quantite;
        this.listeElementsRecette.push(this.elemRecette);

      }

    })
  }
  //------------------------Fermeture du mat dialog
  fermer() {
    this.dialogRef.close();
  }

  //------------------------Suppresion d'un élément recette, el est du type ElementRecette
  supprimerElementRecette(er) {
    let index = 0;
    this.listeElementsRecette.forEach(element =>{
      if(element === er){
        this.listeElementsRecette.splice(index, 1);
        index--;
      }
      index++;
    })



  }
  //------------------------On enregistre la recette
  recette: Recette = new Recette();
  enregistrer() {
    let u = new User();
    u.id = parseInt(localStorage.getItem("id"));
    this.recette.user = u;

    this.recette.url = this.recette.url ? this.recette.url : 'https://image.flaticon.com/icons/svg/402/402715.svg';
    this.recette.id = (this.recette.id === 0) ? null : this.recette.id;

    const del = this.http.post(this.s.url + 'ajouter-recette', this.recette).toPromise();

    del.then(data => {

      this.response = data;
      this.recette = this.response;
      const del2 = this.http.delete(this.s.url + 'supprimer-elem-recette/' + this.recette.id).toPromise();
      del2.then(data => {
        this.listeElementsRecette.forEach(element => {
          element.recette = this.recette;
          this.http.post(this.s.url + 'elemRecette', element).subscribe();
        })

      });

      this.dialogRef.close();

    })


  }

}
