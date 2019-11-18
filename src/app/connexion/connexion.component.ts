import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  user : User =new User();
  uConnect : User =new User();
  erreur;
  uTest;
  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit() {
  }

 connexionUser() {

    const del = this.http.post('http://localhost:8087/user', this.user).toPromise();
      del.then(
        data => {
          this.ngOnInit
          this.uTest =  data;
        }, err => {
          console.log(err);
          
        }
      );

    this.uConnect =this.uTest;

      if (this.uConnect.mdp!=null) {
        console.log("super")
        console.log(this.uConnect);
        localStorage.setItem('mail',this.uConnect.mail);
        localStorage.setItem('mdp',this.uConnect.mdp);
        localStorage.setItem('pseudo',this.uConnect.pseudo);
        this.router.navigate(['/home'])
      } else{
        this.erreur = "mauvais identifiants"
      }
      

  }

}
