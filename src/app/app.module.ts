import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HttpClientModule} from '@angular/common/http';
import { CreerlistecourseComponent } from './creerlistecourse/creerlistecourse.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';

import { AfficherfrigoComponent } from './afficherfrigo/afficherfrigo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AfficherlistecourseComponent } from './afficherlistecourse/afficherlistecourse.component';
import { ListeachatComponent } from './listeachat/listeachat.component';
import { AjouterElementListeComponent } from './ajouter-element-liste/ajouter-element-liste.component';




@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ModifprofilComponent,
    ConnexionComponent,
    CreerlistecourseComponent,
    HomeComponent,
    NavbaruserComponent,
    AfficherfrigoComponent,
    AfficherlistecourseComponent,
    AfficherfrigoComponent,
    ListeachatComponent,
    AfficherfrigoComponent,
    AjouterElementListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
