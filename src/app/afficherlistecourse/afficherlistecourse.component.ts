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
  data;

  constructor(private http : HttpClient) { }
  
 

  ngOnInit() {
    
  }

  boutonmodif(l) {
    this.liste = l;
    this.visible=true;
  }

}
