import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Component({
  selector: 'app-listeachat',
  templateUrl: './listeachat.component.html',
  styleUrls: ['./listeachat.component.css']
})

export class ListeachatComponent implements OnInit {

  user: User = new User();
  mesElements;
  listFinale;
  listInter;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.user.id = parseInt(localStorage.getItem("id"));
    this.http.get('http://localhost:8087/liste-achat/' + this.user.id).subscribe(
      data => {
        this.mesElements = data;
      }
    )
  }
}
