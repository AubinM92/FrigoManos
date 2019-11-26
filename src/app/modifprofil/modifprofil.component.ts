import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})
export class ModifprofilComponent implements OnInit {
  visibleVal = false;
  visibleErr = false;
  visibleRien = false;

  data;
  userActuel: User = new User();

  constructor(private s: ServicefrigoService,private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.userActuel.id = +localStorage.getItem("id");
    this.userActuel.mail = localStorage.getItem("mail");
    this.userActuel.pseudo = localStorage.getItem("pseudo");
    this.userActuel.mdp = localStorage.getItem("mdp");
    this.http.get(this.s.url+'user/' + this.userActuel.id).subscribe(
      reponse => {
        this.data = reponse;
        console.log(reponse)
      }
    )
  }

  modifPerson(persn) {
    this.visibleVal = false;
    this.visibleErr = false;
    this.visibleRien = false;
    if (this.userActuel.mail != localStorage.getItem("mail") || this.userActuel.pseudo != localStorage.getItem("pseudo") || this.userActuel.mdp != localStorage.getItem("mdp")) {
      this.http.put(this.s.url+'user/' + this.userActuel.id, this.userActuel).subscribe(data => {
        this.visibleVal = true;
        localStorage.setItem('mail', this.userActuel.mail);
        localStorage.setItem('mdp', this.userActuel.mdp);
        localStorage.setItem('pseudo', this.userActuel.pseudo);
      }, err => {
        this.visibleErr = true;
        console.log(err);
      });
    } else {
      this.visibleRien = true;
    }

  }

  retour() {
    this.router.navigate(['/home'])
  }

}
