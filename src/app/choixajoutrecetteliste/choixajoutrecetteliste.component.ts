import { Component, OnInit } from '@angular/core';
import { ChoixajoutrecettelisteService } from '../choixajoutrecetteliste.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Liste } from '../model/Liste';
import { MessageService } from '../message.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-choixajoutrecetteliste',
  templateUrl: './choixajoutrecetteliste.component.html',
  styleUrls: ['./choixajoutrecetteliste.component.css']
})
export class ChoixajoutrecettelisteComponent implements OnInit {
laRecette;
LaListeRecette : Liste = new Liste();
message;
  constructor(private ajoutService: ChoixajoutrecettelisteService,private dialog4: MatDialog, private http: HttpClient, public dialogRef: MatDialogRef<ChoixajoutrecettelisteComponent>, private messageService : MessageService) { }

  ngOnInit() {
    this.message = this.messageService.message;
    this.laRecette =this.ajoutService.recette;
    this.LaListeRecette = this.ajoutService.liste;
  }

  ajoutTousIngredient(){
    this.http.post('http://localhost:8087/listeRecette/'+this.laRecette.id, this.LaListeRecette).subscribe(data => { 
    });
    this.dialogRef.close();
    this.messageService.message ="Liste ajoutée";
    const mydial4 = this.dialog4.open(MessageComponent);
  }

  ajoutIngredientManquant(){
    this.LaListeRecette.titre = this.laRecette.titre + "*";
    this.http.post('http://localhost:8087/listeRecetteManquant/'+this.laRecette.id, this.LaListeRecette).subscribe(data => { 
    });
    this.dialogRef.close();
    this.messageService.message ="Liste ajoutée";
    const mydial4 = this.dialog4.open(MessageComponent);

  }


  fermer() {
    this.dialogRef.close();
  }


}
