import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-afficherenvie',
  templateUrl: './afficherenvie.component.html',
  styleUrls: ['./afficherenvie.component.css']
})
export class AfficherenvieComponent implements OnInit {

  lesRecettes;
  user:User=new User();
  
  constructor(private http: HttpClient) { }



  ngOnInit() {
    
    this.user.id=localStorage.id;
    console.log(this.user.id);
     this.http.get('http://localhost:8087/recetteByEnvieByUser/' +this.user.id).subscribe(
      data => {
        this.lesRecettes= data;
        console.log(this.lesRecettes);
      })
  }

}
