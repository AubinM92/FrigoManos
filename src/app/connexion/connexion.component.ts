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


  user : User = new User();
  uConnect : User = new User();
  idString : string;
  erreur;
  uTest = null;

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit() {
  }

 connexionUser() {

    const del = this.http.post('http://localhost:8087/connexion', this.user).toPromise();
      del.then(
        data => {
          console.log(data);
          this.uTest =  data;
          this.uConnect = this.uTest;
        }, err => {
          console.log(1);
        }
      );    
      console.log("test 1");
      if (this.uTest!=null) {
        console.log("super")
        console.log(this.uConnect);
        this.idString = this.uConnect.id.toString();
        localStorage.setItem('id', this.idString);
        localStorage.setItem('mail',this.uConnect.mail);
        localStorage.setItem('mdp',this.uConnect.mdp);
        localStorage.setItem('pseudo',this.uConnect.pseudo);

        this.router.navigate(['/home']);
        alert('ok');
      } 
      else {
        this.erreur = "mauvais identifiants"
      }
      

  }

}


