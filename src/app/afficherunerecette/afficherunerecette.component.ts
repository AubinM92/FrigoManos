import { Component, OnInit } from '@angular/core';
import { UnerecetteService } from '../unerecette.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-afficherunerecette',
  templateUrl: './afficherunerecette.component.html',
  styleUrls: ['./afficherunerecette.component.css']
})
export class AfficherunerecetteComponent implements OnInit {
laRecette;
  constructor(private recetteService : UnerecetteService, private http: HttpClient) { }

  ngOnInit() {
this.laRecette = this.recetteService.recette;
  }

}
