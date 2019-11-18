import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user : User =new User();
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
