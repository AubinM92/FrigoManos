import { Component, OnInit } from '@angular/core';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Liste } from '../model/Liste';
import { ServicefrigoService } from '../servicefrigo.service';
import { MessageComponent } from '../message/message.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-choixajoutrecetteliste',
  templateUrl: './choixajoutrecetteliste.component.html',
  styleUrls: ['./choixajoutrecetteliste.component.css']
})
export class ChoixajoutrecettelisteComponent implements OnInit {
laRecette;
LaListeRecette : Liste = new Liste();
message;
  constructor(private s : ServicefrigoService, private ajoutService: ChoixajoutrecettelisteService,private dialog4: MatDialog, private http: HttpClient, public dialogRef: MatDialogRef<ChoixajoutrecettelisteComponent>, private messageService : MessageService) { }

  ngOnInit() {
    this.message = this.messageService.message;
    this.laRecette =this.ajoutService.recette;
    this.LaListeRecette = this.ajoutService.liste;
  }

  ajoutTousIngredient(){
    this.http.post(this.s.url+'listeRecette/'+this.laRecette.id, this.LaListeRecette).subscribe(data => { 
    });
    this.dialogRef.close();
    this.messageService.message ="Liste ajoutée";
    const mydial4 = this.dialog4.open(MessageComponent);
  }

  ajoutIngredientManquant(){
    this.LaListeRecette.titre = this.laRecette.titre + "*";
    this.http.post(this.s.url+'listeRecetteManquant/'+this.laRecette.id, this.LaListeRecette).subscribe(data => { 
    });
    this.dialogRef.close();
    this.messageService.message ="Liste ajoutée";
    const mydial4 = this.dialog4.open(MessageComponent);

  }


  fermer() {
    this.dialogRef.close();
  }


}
