import { Component, OnInit } from '@angular/core';
import { Liste } from '../model/Liste';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-afficherlistecourse',
  templateUrl: './afficherlistecourse.component.html',
  styleUrls: ['./afficherlistecourse.component.css']
})
export class AfficherlistecourseComponent implements OnInit {
  visible =false;
  liste : Liste = new Liste();  
  mesListes;
  mesElementsListe;
  

  constructor(private http : HttpClient) { }
  
 

  ngOnInit() {
    this.http.get('http://localhost:8087/liste').subscribe(
      data=> {
        this.mesListes = data;
        console.log(this.mesListes);
      }
    )
  }

  boutonmodif(l) {
    this.liste = l;
    this.visible=true;
    this.http.get('http://localhost:8087/liste').subscribe(
      data=> {
        this.mesElementsListe = data;
        console.log(this.mesElementsListe);
      }
    )
  }

}
