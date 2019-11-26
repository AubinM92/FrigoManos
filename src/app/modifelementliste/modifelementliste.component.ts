import { Component, OnInit } from '@angular/core';
import { ModiflisteService } from '../modifliste.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-modifelementliste',
  templateUrl: './modifelementliste.component.html',
  styleUrls: ['./modifelementliste.component.css']
})
export class ModifelementlisteComponent implements OnInit {

  element;
  erreur;
  constructor(private s: ServicefrigoService,private servmodif: ModiflisteService, private http: HttpClient, public dialog3Ref: MatDialogRef<ModifelementlisteComponent>) { }

  ngOnInit() {
    this.element = this.servmodif.elementmodif;
  }

  modifElement() {
  
      this.http.put(this.s.url+'elemListe/' + this.element.id, this.element).subscribe(
        data => {
          this.dialog3Ref.close();
        }, err => {
          console.log(err);
        }
      );
    }
  

  fermer() {
    this.dialog3Ref.close();
  }
}
