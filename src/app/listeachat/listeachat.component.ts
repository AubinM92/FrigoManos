import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listeachat',
  templateUrl: './listeachat.component.html',
  styleUrls: ['./listeachat.component.css']
})

export class ListeachatComponent implements OnInit {

  mesListes;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8087/liste-globale/' + "").subscribe(
      data => {
        this.mesListes = data;
        console.log(this.mesListes);
      }
    )
  }

}
