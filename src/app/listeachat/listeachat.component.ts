import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ElementFrigo } from '../model/ElementFrigo';
import { DataSource } from '@angular/cdk/table';
import { ElementListe } from '../model/ElementListe';
import { ListeAchat } from '../model/ListeAchat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeachat',
  templateUrl: './listeachat.component.html',
  styleUrls: ['./listeachat.component.css']
})

export class ListeachatComponent implements OnInit {
  ELEMENT_DATA: ListeAchat[] = [];
  displayedColumns: string[] = ['select','id', 'nom', 'quantite', 'unite'];
  dataSource = new MatTableDataSource<ListeAchat>(this.ELEMENT_DATA);
  selection = new SelectionModel<ListeAchat>(true, []);
  elementListe: ListeAchat = new ListeAchat();
  elementsListe: ListeAchat[] = [];
  user: User = new User();
  mesElements;
  test;

  constructor(private http: HttpClient, private router :Router) { }

  ngOnInit() {
    this.recupDonnees();
  }

  recupDonnees() {
    this.dataSource.data.reduce;
    this.user.id = parseInt(localStorage.getItem("id"));
    const del = this.http.get('http://localhost:8087/liste-achat/' + this.user.id).toPromise();
    this.dataSource = new MatTableDataSource<ListeAchat>();
    del.then(
      data => {
        this.mesElements = data;
        this.elementsListe = this.mesElements;
        this.elementsListe.forEach(element => {
          this.ELEMENT_DATA.push(element);
        });
        this.dataSource.data = this.ELEMENT_DATA;
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



  majFrigo() {

    this.selection.selected.forEach(element => {
      console.log(element.quantite)
    }
    );

  }
  donnees: ListeAchat[] = [];
  modifQuantite(idElement){
    console.log(1);    
  }

}
