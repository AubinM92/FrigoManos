import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ServicefrigoService } from '../servicefrigo.service';
import { ElementFrigo } from '../model/ElementFrigo';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-modif-frigo',
  templateUrl: './modif-frigo.component.html',
  styleUrls: ['./modif-frigo.component.css']
})
export class ModifFrigoComponent implements OnInit {

  element;

  constructor(public dialogRef: MatDialogRef<ModifFrigoComponent>, private http: HttpClient, private s: ServicefrigoService) { }

  ngOnInit() {
    this.element = this.s.elemservice; 
  }

  fermer() {
    this.dialogRef.close();
  }

  modifElementFrigo(){
 
    console.log("entree service s modif", this.s.elemservice);
    console.log("entree service modif", this.element);


    const del= this.http.put(this.s.url+'elemFrigo/'+ this.element.id, this.element).toPromise();

    del.then(
      data => {
        this.dialogRef.close();
      }, err => {
        console.log(err);
      }
    );
  }

}
