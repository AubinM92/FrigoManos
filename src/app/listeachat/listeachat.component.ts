import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ElementFrigo } from '../model/ElementFrigo';
import { DataSource } from '@angular/cdk/table';
import { ElementListe } from '../model/ElementListe';
import { ListeAchat } from '../model/ListeAchat';
import { Router } from '@angular/router';
import { Ingredient } from '../model/Ingredient';
import { Liste } from '../model/Liste';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-listeachat',
  templateUrl: './listeachat.component.html',
  styleUrls: ['./listeachat.component.css']
})

export class ListeachatComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ELEMENT_DATA: ListeAchat[] = [];
  displayedColumns: string[] = ['select', 'nom', 'quantite', 'unite'];
  dataSource = new MatTableDataSource<ListeAchat>(this.ELEMENT_DATA);
  selection = new SelectionModel<ListeAchat>(true, []);

  elementsListe: ListeAchat[] = [];
  user: User = new User();
  mesElements;
  erreur;
 

  public mesInput: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.recupListes();
  }

  

  recupDonnees() {
    this.dataSource = new MatTableDataSource<ListeAchat>();
    this.ELEMENT_DATA = [];
    let i = 0;
    let r= 0;

    this.user.id = parseInt(localStorage.getItem("id"));
    this.selectionListe.selected.forEach(d => {
      const del = this.http.get('http://localhost:8087/liste-achat/' + this.user.id + "-" + d.id).toPromise();
      del.then(
        data => {
          this.mesElements = data;
          this.elementsListe = this.mesElements;
          
          this.elementsListe.forEach(element => {
            element.index = i;
            this.mesInput[i] = element.quantite;
            i++;
            this.ELEMENT_DATA.push(element);
          });
          this.dataSource.data = this.ELEMENT_DATA;
        })
        
    })

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

  e: ElementFrigo = new ElementFrigo();
  i: Ingredient = new Ingredient();
  u: User = new User();

  majFrigo() {
    let c=0;
    this.selection.selected.forEach(datas => {
      this.e.quantite = this.mesInput[datas.index];
      this.e.quantite = this.mesInput[datas.index];
      
      this.u.id = parseInt(localStorage.getItem("id"));
      this.e.user = this.u;

      this.i.id = datas.idIngredient;
      this.e.ingredient = this.i;

      this.selection.deselect(datas);

      if (this.e.quantite > 0) {
        const del = this.http.post("http://localhost:8087/elemFrigo-achat", this.e).toPromise();

        del.then(response => {
          const del = this.http.delete("http://localhost:8087/elemListe/" + datas.idElement).toPromise();
          del.then( datas =>{

            if(c >= this.selection.selected.length){
              this.recupDonnees();
            }else{
              c++;
            }

          })
        })



      } else {
        this.erreur = "La quantité d'un des élément est nulle "
      }
    })
  }

  //----------------------------------------------------------------------------
  ELEMENT_DATA_LISTE: Liste[] = [];
  displayedColumnsListe: String[] = ['selectListe', 'listes'];
  dataSourceListe = new MatTableDataSource<Liste>(this.ELEMENT_DATA_LISTE);
  selectionListe = new SelectionModel<Liste>(true, []);

  liste;
  meslistes: Liste[] = [];
  recupListes() {
    let id = localStorage.getItem("id");
    const del = this.http.get('http://localhost:8087/liste-globale/' + id).toPromise();

    this.dataSourceListe = new MatTableDataSource<Liste>();
    del.then(
      data => {
        this.liste = data;
        this.meslistes = this.liste;
        this.meslistes.forEach(elementListe => {
          this.ELEMENT_DATA_LISTE.push(elementListe);
        });
        this.dataSourceListe.data = this.ELEMENT_DATA_LISTE;
      }
    )
  }

  isAllSelectedListe() {
    const numSelectedListe = this.selectionListe.selected.length;
    const numRowsListe = this.dataSourceListe.data.length;
    return numSelectedListe === numRowsListe;
  }
  majListe(){
    this.recupDonnees();
  }
  masterToggleListe() {
    this.isAllSelectedListe() ?
      this.selectionListe.clear() :
      this.dataSourceListe.data.forEach(rowListe => this.selectionListe.select(rowListe));
      
  }

  /** The label for the checkbox on the passed row */
  checkboxLabelListe(rowListe?: Liste): string {
    if (!rowListe) {
      return `${this.isAllSelectedListe() ? 'select' : 'deselect'} all`;
    }
  }



}
