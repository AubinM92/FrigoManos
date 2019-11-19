import { Component, OnInit } from '@angular/core';
import { Liste } from '../model/Liste';
import { HttpClient } from '@angular/common/http';
import { del } from 'selenium-webdriver/http';
import { ElementListe } from '../model/ElementListe';

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
  element;
  

  constructor(private http : HttpClient) { }
  
 

  ngOnInit() {
    this.http.get('http://localhost:8087/liste').subscribe(
      data=> {
        this.mesListes = data;
        console.log(this.mesListes);
      }
      
    );

    if(this.liste.titre!=null){
        this.visible=true;
        this.http.get('http://localhost:8087/elemListe/'+this.liste.id).subscribe(
          data=> {
            this.mesElementsListe = data;
            console.log(this.mesElementsListe);
          }
        )
      
    }
  }

  boutonVoir(l) {
    this.liste = l;
    this.visible=true;
    this.http.get('http://localhost:8087/elemListe/'+this.liste.id).subscribe(
      data=> {
        this.mesElementsListe = data;
        console.log(this.mesElementsListe);
      }
    )
  }

  getElementListe(l){
    this.liste = l;
    this.http.get('http://localhost:8087/elemListe/'+this.liste.id).subscribe(
      data=> {
        this.mesElementsListe = data;
        
  }
    )
}

  supprimerElement(e){
    this.element=e;
    const del = this.http.delete('http://localhost:8087/elemListe/' + this.element.id).toPromise();

    del.then(
      data => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      }
    );
  }

  supprimerListe(l){
    this.liste = l;

    this.getElementListe(l);

    
    for(let e of this.mesElementsListe){
      console.log(e);
    }
      
  
   /*
    const del = this.http.delete('http://localhost:8087/liste/'+this.liste.id).toPromise();

      del.then(x => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      });*/
} 

}
