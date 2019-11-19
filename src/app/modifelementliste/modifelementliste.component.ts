import { Component, OnInit } from '@angular/core';
import { ModiflisteService } from '../modifliste.service';

@Component({
  selector: 'app-modifelementliste',
  templateUrl: './modifelementliste.component.html',
  styleUrls: ['./modifelementliste.component.css']
})
export class ModifelementlisteComponent implements OnInit {

  element;
  constructor(private servmodif : ModiflisteService) { }

  ngOnInit() {
    this.element = this.servmodif.elementmodif;
  }

modifElement(){
  
}
}
