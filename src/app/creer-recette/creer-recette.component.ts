import { Component, OnInit } from '@angular/core';
import { ServicefrigoService } from '../servicefrigo.service';
import { MatDialogRef, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Recette } from '../model/Recette';
import { User } from '../model/User';
import { ModifRecetteService } from '../modif-recette.service';
import { Ingredient } from '../model/Ingredient';
import { ElementRecette } from '../model/ElementRecette';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-creer-recette',
  templateUrl: './creer-recette.component.html',
  styleUrls: ['./creer-recette.component.css']
})
export class CreerRecetteComponent implements OnInit {

  ELEMENT_DATA: ElementRecette[] = [];
  displayedColumns: string[] = ['nom', 'quantite', 'unite','edit', 'del'];
  dataSource = new MatTableDataSource<ElementRecette>(this.ELEMENT_DATA);
  selection = new SelectionModel<ElementRecette>(true, []);

  constructor(private mr: ModifRecetteService,private s : ServicefrigoService,
    public dialogRef: MatDialogRef<CreerRecetteComponent>, private http: HttpClient, private router: Router) { }

    tpsPrep = this.mr.recette.tempsPrepa;
    tpsCuisson = this.mr.recette.tempsCuis;
    titre = this.mr.recette.titre;
    description = this.mr.recette.description;
    url = this.mr.recette.url;
    ing = this.mr.ingredients;
    elementListe;
    response;

  ngOnInit() {

    this.recupIngredients();

  }

  recupIngredients(){
    
      const del = this.http.get("http://localhost:8087/elemRecette/" + this.mr.recette.id).toPromise();
      del.then(data =>{
        this.response = data;
        this.mr.ingredients = this.response;
        this.elementListe = this.response;     
        this.dataSource = this.elementListe;
        console.log(this.dataSource);   
      })
    
  }

  enregistrer(){
    this.mr.recette = new Recette();
    this.mr.recette.tempsCuis = this.tpsCuisson;
    this.mr.recette.tempsPrepa = this.tpsPrep;
    this.mr.recette.description = this.description;
    this.mr.recette.titre = this.titre;
    this.mr.recette.url = this.url ? this.url : 'https://image.flaticon.com/icons/svg/402/402715.svg';

    let u = new User();
    u.id =parseInt(localStorage.getItem("id"));
    this.mr.recette.user = u;

    const del = this.http.post('http://localhost:8087/ajouter-recette', this.mr.recette).toPromise();
    
    del.then(data =>{
      this.dialogRef.close();
    })
  

  }
  
fermer(){
  this.dialogRef.close();
}

supprimerElementRecette(el){

}

}
