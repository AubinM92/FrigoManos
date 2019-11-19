import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CreerlistecourseComponent } from '../creerlistecourse/creerlistecourse.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

 open() {
    const mydial = this.dialog.open(CreerlistecourseComponent);
 } 

}
