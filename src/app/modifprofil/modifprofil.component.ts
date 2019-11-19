import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})
export class ModifprofilComponent implements OnInit {
  visibleVal = false;
  visibleErr = false;

  data;
  userActuel: User = new User();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.userActuel.id = +localStorage.getItem("id");
    this.userActuel.mail = localStorage.getItem("mail");
    this.userActuel.pseudo = localStorage.getItem("pseudo");
    this.userActuel.mdp = localStorage.getItem("mdp");
    this.http.get('http://localhost:8087/user/' + this.userActuel.id).subscribe(
      reponse => {
        this.data = reponse;
        console.log(reponse)
      }
    )
  }

  modifPerson(persn) {
    this.http.put('http://localhost:8087/user/' + this.userActuel.id, this.userActuel).subscribe(data => {
      this.visibleVal = true;
    }, err => {
      this.visibleErr = true;
      console.log(err);
    });
  }

  retour() {
    this.router.navigate(['/home'])
  }

}
