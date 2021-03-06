import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicefrigoService } from '../servicefrigo.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  user: User = new User();
  idString;
  erreur;

  uConnect;
  constructor(private http: HttpClient, private router: Router, private s: ServicefrigoService) { }

  ngOnInit() {
  }

  connexionUser() {

    const del = this.http.post(this.s.url+'connexion', this.user).toPromise();
    del.then(
      data => {
        console.log(data);
        this.uConnect = data;

        if (this.uConnect.mail != null) {
          console.log(this.uConnect);
          this.idString = this.uConnect.id.toString();
          localStorage.setItem('id', this.idString);
          localStorage.setItem('mail', this.uConnect.mail);
          localStorage.setItem('mdp', this.uConnect.mdp);
          localStorage.setItem('pseudo', this.uConnect.pseudo);
          this.router.navigate(['/mon-frigo'])
        } else {
          this.erreur = "Mail ou mot de passe incorrect"
          this.user.mail = "";
          this.user.mdp = "";
        }


      }, err => {
        console.log(err);

      }
    );
  }

  toInscription() {
    this.router.navigate(['/inscription']);
  }

}
