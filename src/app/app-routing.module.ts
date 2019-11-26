import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreerlistecourseComponent } from './creerlistecourse/creerlistecourse.component'
import { HomeComponent } from './home/home.component';
import { AfficherfrigoComponent } from './afficherfrigo/afficherfrigo.component';
import { AfficherlistecourseComponent } from './afficherlistecourse/afficherlistecourse.component';
import { ListeachatComponent } from './listeachat/listeachat.component'
import { AfficherunerecetteComponent } from './afficherunerecette/afficherunerecette.component'

import { ChoixajoutrecettelisteComponent } from './choixajoutrecetteliste/choixajoutrecetteliste.component';
import { RecettesComponent } from './recettes/recettes.component';
import { ModifFrigoComponent } from './modif-frigo/modif-frigo.component';
import { ModifelementlisteComponent } from './modifelementliste/modifelementliste.component';
import { AjouterElementFrigoComponent } from './ajouter-element-frigo/ajouter-element-frigo.component';
import { AfficherenvieComponent } from './afficherenvie/afficherenvie.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'modif-profil', component: ModifprofilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'creer-liste-course', component: CreerlistecourseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mon-frigo', component: AfficherfrigoComponent },
  { path: 'mes-liste', component: AfficherlistecourseComponent },
  { path: 'liste-achat', component: ListeachatComponent },
  { path: 'mon-frigo', component: AfficherfrigoComponent },
  { path: 'mes-listes', component: AfficherlistecourseComponent },
  { path: 'aff-une-recette', component: AfficherunerecetteComponent },
  { path: 'recettes', component: RecettesComponent },
  { path: 'modifelementliste', component: ModifelementlisteComponent },
  { path: 'recettes', component: RecettesComponent },
  { path: 'modif-frigo', component: ModifFrigoComponent },
  { path: 'ajout-frigo', component: AjouterElementFrigoComponent },
  { path: 'choixajoutliste', component : ChoixajoutrecettelisteComponent},
  { path: 'aff-envie', component: AfficherenvieComponent },
  {path: 'message', component: MessageComponent},

  { path: "", redirectTo: '/connexion', pathMatch: 'full' },
  { path: "", redirectTo: '/connexion', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
