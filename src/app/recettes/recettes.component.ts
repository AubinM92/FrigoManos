import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  allRecettes;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8087/recette').subscribe(
      data => {
        this.allRecettes = data;
        console.log(this.allRecettes);
      })
  }

}
