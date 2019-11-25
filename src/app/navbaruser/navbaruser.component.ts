import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  liste: Liste = new Liste();

  constructor(private router: Router, private s: ServicefrigoService) { }

  ngOnInit() {
    if (localStorage.length !== 0) {
      this.noSession = true;
    }
    this.cUser = this.s.uco;
  }

  deconnexion() {
    this.s.uco = "";
    this.noSession = false;
    localStorage.clear();
     this.ngOnInit();
    this.router.navigate(['/connexion']);
  }
  
  monCompte() {
    if (localStorage.length !== 0) {
      this.router.navigate(['/modif-profil']);
    } else {
      this.router.navigate(['/connexion']);
    }
  }

  toListeAchat() {
    if (localStorage.length !== 0) {
      this.router.navigate(['/liste-achat']);
    } else {
      this.router.navigate(['/connexion']);
    }
  }

  mesListes() {
    if (localStorage.length !== 0) {
      this.router.navigate(['/mes-listes']);
    } else {
      this.router.navigate(['/connexion']);
    }
  }

  monFrigo() {
    if (localStorage.length !== 0) {
      this.router.navigate(['/mon-frigo']);
    } else {
      this.router.navigate(['/connexion']);
    }
  }

  toRecettes() {
    if (localStorage.length !== 0) {
      this.router.navigate(['/recettes']);
    } else {
      this.router.navigate(['/connexion']);
    }
  }

  toEnvies() {
    if (localStorage.length !== 0) {
      this.router.navigate(['/aff-envie']);
    } else {
      this.router.navigate(['/connexion']);
    }
  }

}
