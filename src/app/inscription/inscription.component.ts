import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionValideeComponent } from '../inscription-validee/inscription-validee.component';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
user: User = new User();
motDePasse2;
erreur;
valider;

  constructor(private http:HttpClient, private router: Router, private dialog: MatDialog) {  }

  ngOnInit() {
  }

  inscription(){

    if(this.user.mdp != this.motDePasse2){
      this.erreur = "Mots de passe non identiques !"
      this.user.mdp = "";
      this.motDePasse2 = "";
      return 0;
    }

    this.http.post('http://localhost:8087/user', this.user).subscribe(
      data => {

      }, err => {
        this.erreur = "Compte déjà existant";
        return 0;
      }
    );
    const mydiale = this.dialog.open(InscriptionValideeComponent);
    this.router.navigate(['/connexion']);
  }

  toConnexion() {
    this.router.navigate(['/connexion']);
  }

}
