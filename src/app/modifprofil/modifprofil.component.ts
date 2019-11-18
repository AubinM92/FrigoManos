import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})
export class ModifprofilComponent implements OnInit {

  data;
  user: User =new User();
  


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.user.mail = localStorage.getItem('mail');
    this.user.pseudo = localStorage.getItem('pseudo');
    this.user.mdp = localStorage.getItem('mdp');
    // this.http.get('http://localhost:8087/user/', this.user.id).subscribe(
      /* reponse => {
        this.data = reponse;
        console.log(reponse) 
      }
    ) */
  }

  modifPerson(persn){
    this.user = persn;
  }

}
