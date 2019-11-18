import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Liste } from '../model/Liste'
import { User } from '../model/User';

@Component({
  selector: 'app-creerlistecourse',
  templateUrl: './creerlistecourse.component.html',
  styleUrls: ['./creerlistecourse.component.css']
})


export class CreerlistecourseComponent implements OnInit {
  nom;
  erreur;
  liste: Liste = new Liste();
  user: User = new User();

  constructor(
    public dialogRef: MatDialogRef<CreerlistecourseComponent>, private http: HttpClient) { }


  ngOnInit() {
  }

  valider() {

    this.user.id = parseInt(localStorage.getItem("id"));

    this.liste.user = this.user;
    this.liste.titre = this.nom;

    this.http.post('http://localhost:8087/liste', this.liste).subscribe(
      data => {

      }, err => {
        return 0;
      }
    );

  }

  fermer() {
    this.dialogRef.close();
  }



}
