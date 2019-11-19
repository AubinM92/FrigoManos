import { Component, OnInit } from '@angular/core';
import { ElementFrigo } from '../model/ElementFrigo';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-afficherfrigo',
  templateUrl: './afficherfrigo.component.html',
  styleUrls: ['./afficherfrigo.component.css']
})

export class AfficherfrigoComponent implements OnInit {

  visible=false;
  mesElementsFrigo;
  ef: ElementFrigo = new ElementFrigo();
  element;
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8087/elemFrigo/' + localStorage.getItem("id")).subscribe(
      data => {
        this.element = data;
        this.mesElementsFrigo = this.element;
        console.log(this.mesElementsFrigo);
      }
    )
  }


  supprimerElementFrigo(e) {
    this.element = e;
    const del = this.http.delete('http://localhost:8087/elemFrigo/' + this.element.id).toPromise();

    del.then(
      data => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      }
    );
  }

  boutonVoir(e) {
    this.element = e;
    console.log(e);
    this.visible = true;
    /*
    this.http.get('http://localhost:8087/elemFrigox/' + this.element.id).subscribe(
      data => {
        this.monElement = data;
        console.log(this.monElement);
      }
    )*/
  }

  modifElementFrigo(){
    console.log(this.element);
    this.http.put('http://localhost:8087/elemFrigo/'+ this.element.id, this.element).subscribe(
      data => {
      }, err => {
        console.log(err);
      }
    );
  }

}