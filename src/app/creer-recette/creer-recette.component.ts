import { Component, OnInit } from '@angular/core';
import { ServicefrigoService } from '../servicefrigo.service';
import { MatDialogRef, MatTableDataSource, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Recette } from '../model/Recette';
import { User } from '../model/User';
import { ModifRecetteService } from '../modif-recette.service';
import { Ingredient } from '../model/Ingredient';
import { ElementRecette } from '../model/ElementRecette';
import { SelectionModel } from '@angular/cdk/collections';
import { AjouterElementRecetteComponent } from '../ajouter-element-recette/ajouter-element-recette.component';

@Component({
  selector: 'app-creer-recette',
  templateUrl: './creer-recette.component.html',
  styleUrls: ['./creer-recette.component.css']
})
export class CreerRecetteComponent implements OnInit {

  ELEMENT_DATA: ElementRecette[] = [];
  displayedColumns: string[] = ['ingredient.nom','quantite','ingredient.unite','del'];
  dataSource = new MatTableDataSource<ElementRecette>(this.ELEMENT_DATA);
  selection = new SelectionModel<ElementRecette>(true, []);

  constructor(private mr: ModifRecetteService,private s : ServicefrigoService,
    public dialogRef: MatDialogRef<CreerRecetteComponent>, private http: HttpClient, private router: Router,
    private myDial: MatDialog) { }

    tpsPrep = this.mr.recette.tempsPrepa;
    tpsCuisson = this.mr.recette.tempsCuis;
    titre = this.mr.recette.titre;
    description = this.mr.recette.description;
    url = this.mr.recette.url;
    ing = this.mr.ingredients;
    elementListe;
    response;
    elemRecette: ElementRecette = new ElementRecette();

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
         
      })
    
  }

  enregistrer(){
    
    

    this.mr.recette.tempsCuis = this.tpsCuisson;
    this.mr.recette.tempsPrepa = this.tpsPrep;
    this.mr.recette.description = this.description;
    this.mr.recette.titre = this.titre;
    this.mr.recette.url = this.url ? this.url : 'https://image.flaticon.com/icons/svg/402/402715.svg';


    let u = new User();
    u.id =parseInt(localStorage.getItem("id"));
    this.mr.recette.user = u;

    this.mr.recette.id = (this.mr.recette.id === 0) ? null : this.mr.recette.id;
    console.log(this.mr.recette)
    const del = this.http.post(this.s.url +'ajouter-recette', this.mr.recette).toPromise();

    del.then(data =>{
      this.response = data;
      this.mr.recette = this.response;
      console.log(this.mr.recette)
      this.http.delete(this.s.url + 'supprimer-elem-recette/'+ this.mr.recette.id).subscribe();

      this.elementListe.forEach(element => {
        console.log(element)
        element.recette = this.mr.recette;
        this.http.post(this.s.url + 'elemRecette', element).subscribe();
      });
      this.dialogRef.close();

    })
  

  }
  
fermer(){
  this.dialogRef.close();
}

supprimerElementRecette(el){
  let index = 0;
  this.ELEMENT_DATA = []
  this.elementListe.forEach(element => {
    if(el.ingredient.id === element.ingredient.id){
      this.elementListe.splice(index, 1)
      index--;
    }else{
      this.ELEMENT_DATA.push(element);
    }
    index++;
  });

  this.dataSource = new MatTableDataSource<ElementRecette>(this.ELEMENT_DATA);

}

ajouterIngredient(){
  const myDial = this.myDial.open(AjouterElementRecetteComponent)
  myDial.afterClosed().subscribe(result =>{

    this.mr.elem.recette = this.mr.recette;
    //this.mr.elem.recette.user.id = parseInt(localStorage.getItem("id"));

    this.ELEMENT_DATA.push(this.mr.elem);
    this.elementListe.push(this.mr.elem);
    this.dataSource = new MatTableDataSource<ElementRecette>(this.ELEMENT_DATA);

  })
}

}
