import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creerlistecourse',
  templateUrl: './creerlistecourse.component.html',
  styleUrls: ['./creerlistecourse.component.css']
})


export class CreerlistecourseComponent implements OnInit {
nom;
idUser;
erreur;
  constructor(
    public dialogRef: MatDialogRef<CreerlistecourseComponent>, private http:HttpClient) {}


  ngOnInit() {
  }

  valider(){

    this.idUser

    this.http.post('http://localhost:8087/liste', this.idUser).subscribe(
      data => { 

      }, err => {
        this.erreur = "Compte déjà existant";
        return 0;
      }
    );




  }

  fermer(){
    this.dialogRef.close();
  }


  
}
