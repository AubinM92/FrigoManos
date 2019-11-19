import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Liste } from '../model/Liste'
import { User } from '../model/User';
//import { AfficherlistecourseComponent } from '../afficherlistecourse/afficherlistecourse.component';

@Component({
  selector: 'app-ajouter-element-liste',
  templateUrl: './ajouter-element-liste.component.html',
  styleUrls: ['./ajouter-element-liste.component.css']
})
export class AjouterElementListeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouterElementListeComponent>, private http: HttpClient) { }

  ngOnInit() {
    
  }

  fermer() {
    this.dialogRef.close(); 
  }

}
