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

  constructor(private http: HttpClient, private dialog: MatDialog,private dialog2: MatDialog,private dialog3: MatDialog, private router: Router, private servmodif : ModiflisteService) { }



  ngOnInit() {
    this.user.id = parseInt(localStorage.getItem("id"));

    const del = this.http.get('http://localhost:8087/liste-globale/'+ this.user.id).toPromise();
    del.then(
      data => {
        this.mesListes = data;
        console.log(this.mesListes);

        if (this.liste.titre != null) {
      
          const del2 = this.http.get('http://localhost:8087/elemListe/' + this.liste.id).toPromise()
          del2.then(
            data => {
              this.mesElementsListe = data;
            }
          )
        }

      }
    );


  }

  boutonVoir(l) {
    this.liste = l;
    localStorage.setItem("vueListe", (""+this.liste.id));
    this.visible = true;
    this.http.get('http://localhost:8087/elemListe/' + this.liste.id).subscribe(
      data => {
        this.mesElementsListe = data;
      }
    )
  }

  getElementListe(l) {
    this.liste = l;
    this.http.get('http://localhost:8087/elemListe/' + this.liste.id).subscribe(
      data => {
        this.mesElementsListe = data;

      }
    )
  }

  supprimerElement(e) {
    this.element = e;
    const del = this.http.delete('http://localhost:8087/elemListe/' + this.element.id).toPromise();

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

    const del1 = this.http.get('http://localhost:8087/elemListe/' + this.liste.id).toPromise();
      del1.then(data => {
        this.mesElementsListe = data;
        for (let e of this.mesElementsListe) {
          this.supprimerElement(e);
        }
        this.ngOnInit();
      })

    const del2 = this.http.delete('http://localhost:8087/liste/'+this.liste.id).toPromise();

      del2.then(x => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      });
      this.visible = false;
}


    nouvelleListe(){
      const mydial = this.dialog.open(CreerlistecourseComponent);
      mydial.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    }

    ajoutElementListe(){
      const mydial2 = this.dialog2.open(AjouterElementListeComponent);
      mydial2.afterClosed().subscribe(result => {
        this.ngOnInit();
      });

    }

    modifElementListe(e){
      this.servmodif.elementmodif = e;
      const mydial3 = this.dialog3.open(ModifelementlisteComponent);
    }

}
