import { Component, OnInit } from '@angular/core';
import { Liste } from '../model/Liste';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CreerlistecourseComponent } from '../creerlistecourse/creerlistecourse.component';
import { User } from '../model/User';
import { del } from 'selenium-webdriver/http';
import { ElementListe } from '../model/ElementListe';
import { CreerlistecourseComponent } from '../creerlistecourse/creerlistecourse.component';
import { MatDialog } from '@angular/material/dialog';

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

<<<<<<< HEAD
  constructor(private http: HttpClient,private dialog: MatDialog) { }
=======
  constructor(private http: HttpClient, private dialog: MatDialog) { }
>>>>>>> 8f63a75a61434f9f522c66f381829563bf47374c



  ngOnInit() {
    this.user.id = parseInt(localStorage.getItem("id"));
    this.http.get('http://localhost:8087/liste-globale/'+ this.user.id).subscribe(
      data => {
        this.mesListes = data;
        console.log(this.mesListes);
      }
    );

    if (this.liste.titre != null) {
      
      this.http.get('http://localhost:8087/elemListe/' + this.liste.id).subscribe(
        data => {
          this.mesElementsListe = data;
          console.log(this.mesElementsListe);
        }
      )
    }
  }

  boutonVoir(l) {
    this.liste = l;
    this.visible = true;
    this.http.get('http://localhost:8087/elemListe/' + this.liste.id).subscribe(
      data => {
        this.mesElementsListe = data;
        console.log(this.mesElementsListe);
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
      })

    const del2 = this.http.delete('http://localhost:8087/liste/'+this.liste.id).toPromise();

      del2.then(x => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      });
      this.visible = false;
}

<<<<<<< HEAD
  nouvelleListe(){
    const mydial = this.dialog.open(CreerlistecourseComponent);
  }
=======
    nouvelleListe(){
      const mydial = this.dialog.open(CreerlistecourseComponent);
    }
>>>>>>> 8f63a75a61434f9f522c66f381829563bf47374c

}
