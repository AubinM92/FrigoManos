import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-validees',
  templateUrl: './courses-validees.component.html',
  styleUrls: ['./courses-validees.component.css']
})
export class CoursesValideesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CoursesValideesComponent>) { }

  ngOnInit() {
  }

  fermer() {
    this.dialogRef.close();
  }
}
