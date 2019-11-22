import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Liste } from '../model/Liste';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})

export class NavbaruserComponent implements OnInit {
  
  noSession = false;
  cUser;
  data;
  response;
  liste : Liste = new Liste();
  constructor(private router: Router, private http: HttpClient, private s: ServicefrigoService) { }

  ngOnInit() {
    if (localStorage.length !== 0) {
      this.noSession = true;
    }
    this.cUser = this.s.uco;
  }

  deconnexion(){
    this.s.uco = "";
    localStorage.clear();
   // this.ngOnInit();
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
    this.router.navigate(['/mon-frigo']);
  }

  toRecettes() {
    this.router.navigate(['/recettes']);
  }

  toEnvies() {
    this.router.navigate(['/aff-envie']);
  }
}
