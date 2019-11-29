import { Component, OnInit } from '@angular/core';
import { Liste } from '../model/Liste';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CreerlistecourseComponent } from '../creerlistecourse/creerlistecourse.component';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { del } from 'selenium-webdriver/http';
import { ElementListe } from '../model/ElementListe';
import { AjouterElementListeComponent } from '../ajouter-element-liste/ajouter-element-liste.component';
import { ModifelementlisteComponent } from '../modifelementliste/modifelementliste.component';
import { ModiflisteService } from '../modifliste.service';
import { R3TargetBinder } from '@angular/compiler';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-afficherlistecourse',
  templateUrl: './afficherlistecourse.component.html',
  styleUrls: ['./afficherlistecourse.component.css']
})
export class AfficherlistecourseComponent implements OnInit {
  visible = false;
  liste: Liste = new Liste();
  mesListes;
  mesElementsListe;
  element;
  user: User = new User();
  constructor(private s: ServicefrigoService,private http: HttpClient, private dialog: MatDialog, private dialog2: MatDialog, private dialog3: MatDialog, private router: Router, private servmodif: ModiflisteService) { }

  

  ngOnInit() {
    this.index = parseInt(localStorage.getItem("couleurListe"));
    this.user.id = parseInt(localStorage.getItem("id"));

    this.http.get(this.s.url+'liste-globale/' + this.user.id).subscribe(
      data => {
        this.mesListes = data;
      }
    );

    if (this.liste.titre != null) {

      this.http.get(this.s.url+'elemListe/' + this.liste.id).subscribe(
        data => {
          this.mesElementsListe = data;
        }
      )
    }
  }

  c: string[] = ["#a6d6ea","#c2dcb9","#f2cbaa","#e5b7d1","#f4eab9","#f76b6b","#7984e2"];
  couleur(i){
    return this.c[i%this.c.length];
  };

  supprimerListesVides(){
    const del = this.http.delete('http://localhost:8087/liste-vides/'+localStorage.getItem("id")).toPromise();
    del.then(data =>{
      this.ngOnInit();
    })
  }
  
  index: number;
  couleurDetail(){
    return this.couleur(this.index);
  }

  boutonVoir(l, i) {
    this.liste = l;
    this.index = i;


    localStorage.setItem("vueListe", this.liste.id+""); 
    localStorage.setItem("couleurListe", i+""); 


    this.visible = true;
    this.http.get(this.s.url+'elemListe/' + this.liste.id).subscribe(
      data => {
        this.mesElementsListe = data;
        this.mesElementsListe.forEach(element => {
          if (element.ingredient.url === null || element.ingredient.url === "") {
            element.ingredient.url = "https://image.flaticon.com/icons/svg/2169/2169159.svg";
          }
        });
      }
    )
  }

  getElementListe(l) {
    this.liste = l;
    this.http.get(this.s.url+'elemListe/' + this.liste.id).subscribe(
      data => {
        this.mesElementsListe = data;

      }
    )
  }

  supprimerElement(e) {
    this.element = e;
    const del = this.http.delete(this.s.url+'elemListe/' + this.element.id).toPromise();

    del.then(
      data => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      }
    );
  }

  supprimerListe(l) {
    this.liste = l;
    const del2 = this.http.delete(this.s.url+'liste/' + this.liste.id).toPromise();
    del2.then(x => {
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
    this.visible = false;
  }
  
  nouvelleListe() {
    const mydial = this.dialog.open(CreerlistecourseComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
      

    
  }


  ajoutElementListe(id) {
    const mydial2 = this.dialog2.open(AjouterElementListeComponent);
    mydial2.afterClosed().subscribe(result => {
      this.boutonVoir(this.liste, this.index);
    });
  }


  modifElementListe(e) {
    this.servmodif.elementmodif = e;
    const mydial3 = this.dialog3.open(ModifelementlisteComponent);
    mydial3.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

}
