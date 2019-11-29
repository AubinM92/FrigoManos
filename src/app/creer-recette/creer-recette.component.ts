import { Component, OnInit } from '@angular/core';
import { ServicefrigoService } from '../servicefrigo.service';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Recette } from '../model/Recette';
import { User } from '../model/User';

@Component({
  selector: 'app-creer-recette',
  templateUrl: './creer-recette.component.html',
  styleUrls: ['./creer-recette.component.css']
})
export class CreerRecetteComponent implements OnInit {

  constructor(private s : ServicefrigoService,
    public dialogRef: MatDialogRef<CreerRecetteComponent>, private http: HttpClient, private router: Router) { }

    tpsPrep = 15;
    tpsCuisson = 15;
    titre = 'titre';
    description = 'description';
    url = 'https://media2.giphy.com/media/eNTxLwTGW7E64/giphy.gif';

  ngOnInit() {


  }

  enregistrer(){
    let recette = new Recette();
    recette.tempsCuis = this.tpsCuisson;
    recette.tempsPrepa = this.tpsPrep;
    recette.description = this.description;
    recette.titre = this.titre;
    recette.url = this.url;
    let u = new User();
    u.id =parseInt(localStorage.getItem("id"));
    recette.user = u;


    const del = this.http.post('http://localhost:8087/ajouter-recette', recette).toPromise();

  

    

  }


}
