import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  mail : string;
  mdp : string;
  user : User =new User();
  
  uConnect : User = new  User();
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

 connexionUser() {
  
    this.http.get('http://localhost:8087/user')
      .subscribe(
        data => {
        }, err => {
          console.log(err);
        }
      );
  }

}
