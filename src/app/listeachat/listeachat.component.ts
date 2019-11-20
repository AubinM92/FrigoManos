import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { ElementFrigo } from '../model/ElementFrigo';
import { DataSource } from '@angular/cdk/table';

const ELEMENT_DATA: ElementFrigo[] = [];

@Component({
  selector: 'app-listeachat',
  templateUrl: './listeachat.component.html',
  styleUrls: ['./listeachat.component.css']
})

export class ListeachatComponent implements OnInit {
  displayedColumns: string[] = ['select','id', 'nom', 'quantite'];
  dataSource = new MatTableDataSource<ElementFrigo>(ELEMENT_DATA);
  selection = new SelectionModel<ElementFrigo>(true, []);
  elementFrigo: ElementFrigo = new ElementFrigo();
  elementsFrigo: ElementFrigo[] = [];
  user: User = new User();
  mesElements;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.recupDonnees();
  }

  recupDonnees(){

    this.user.id = parseInt(localStorage.getItem("id"));
    const del = this.http.get('http://localhost:8087/liste-achat/' + this.user.id).toPromise();

    del.then(
      data => {
        this.mesElements = data;
        this.elementsFrigo = this.mesElements;
        this.elementsFrigo.forEach(element => {
          ELEMENT_DATA.push(element);
        });
        console.log(ELEMENT_DATA)
        this.dataSource.data = ELEMENT_DATA;
      }
    )
  
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: ElementFrigo): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }

    }

}
