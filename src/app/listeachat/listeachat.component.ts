import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listeachat',
  templateUrl: './listeachat.component.html',
  styleUrls: ['./listeachat.component.css']
})

export class ListeachatComponent implements OnInit {

  mesListes;
  liste;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8087/liste-globale/' + "2").subscribe(
      data => {
        this.mesListes = data;
        this.mesListes.forEach(liste => {
          console.log(liste);
        });
        console.log(this.mesListes);
      }
    )
  }

}
