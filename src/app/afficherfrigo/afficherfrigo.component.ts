import { Component, OnInit } from '@angular/core';
import { ElementFrigo } from '../model/ElementFrigo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ModifFrigoComponent } from '../modif-frigo/modif-frigo.component';
import { ServicefrigoService } from '../servicefrigo.service';
import { AjouterElementFrigoComponent } from '../ajouter-element-frigo/ajouter-element-frigo.component';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-afficherfrigo',
  templateUrl: './afficherfrigo.component.html',
  styleUrls: ['./afficherfrigo.component.css']
})

export class AfficherfrigoComponent implements OnInit {

  visible=false;
  mesElementsFrigo;
  ef: ElementFrigo = new ElementFrigo();
  element;

  

  constructor(private http: HttpClient, private dialog: MatDialog,private dialog2: MatDialog, private router: Router, private s: ServicefrigoService) { }

  ngOnInit() {
    this.http.get('http://localhost:8087/elemFrigo_byUser/' + localStorage.getItem("id")).subscribe(
      data => {
        this.element = data;
        this.mesElementsFrigo = this.element;
        console.log(this.mesElementsFrigo);
      }
    )
  }

  modifQuantite(e){
    this.s.elemservice=e;
    console.log("entree service", e);
    console.log("entree service s", this.s.elemservice);
    const mydial = this.dialog.open(ModifFrigoComponent);
  }

  supprimerElementFrigo(e) {
    this.element = e;
    const del = this.http.delete('http://localhost:8087/elemFrigo/' + this.element.id).toPromise();

    del.then(
      data => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      }
    );
  }

  ajouterElementFrigo(){
    const mydiale= this.dialog.open(AjouterElementFrigoComponent);
    this.ngOnInit;
  }

}