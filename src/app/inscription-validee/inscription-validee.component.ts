import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inscription-validee',
  templateUrl: './inscription-validee.component.html',
  styleUrls: ['./inscription-validee.component.css']
})
export class InscriptionValideeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InscriptionValideeComponent>) { }

  ngOnInit() {
  }

}
