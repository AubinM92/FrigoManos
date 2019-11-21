import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-afficherenvie',
  templateUrl: './afficherenvie.component.html',
  styleUrls: ['./afficherenvie.component.css']
})
export class AfficherenvieComponent implements OnInit {

  lesRecettes;
  
  constructor(private http: HttpClient) { }



  ngOnInit() {
    this.http.get('http://localhost:8087/recetteByEnvieByUser/' +localStorage.id).subscribe(
      data => {
        this.lesRecettes= data;
      })
  }

}
