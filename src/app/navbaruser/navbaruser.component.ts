import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Liste } from '../model/Liste';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {
  cUser;
  data;
  response;
  liste : Liste = new Liste();
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.cUser = localStorage.getItem("pseudo");
  }

  deconnexion(){
    localStorage.clear();
    this.router.navigate(['/connexion']);
  }
  monCompte(){
    localStorage.clear();
    this.router.navigate(['/modif-profil']);
  }

  toListeAchat() {
    this.router.navigate(['/liste-achat']);
  }

  mesListes() {
    this.router.navigate(['/mes-listes']);
  }

  monFrigo(){
    this.router.navigate(['/mon-frigo'])
  }
}
