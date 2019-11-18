import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Liste } from '../model/Liste';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {
  cUser;
  data;
  response;
  liste : Liste = new Liste();
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.cUser = localStorage.getItem("pseudo");

    this.http.get('http://localhost:8087/liste/'+ localStorage.getItem("id")).subscribe(
      response => {
        this.data = response;
        this.liste = this.data;
        console.log(this.liste.titre);
      }
    )
    console.log("test");
  }

  deconnexion(){
    console.log("test");
    localStorage.clear();
    this.router.navigate(['/connexion'])
  }


}
