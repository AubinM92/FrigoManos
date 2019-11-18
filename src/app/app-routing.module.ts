import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreerlistecourseComponent } from './creerlistecourse/creerlistecourse.component'
import { HomeComponent } from './home/home.component';
import { VoirlisteComponent } from './voirliste/voirliste.component';
import { VoirtouteslistesComponent } from './voirtouteslistes/voirtouteslistes.component';
import { AfficherfrigoComponent } from './afficherfrigo/afficherfrigo.component';
import { AfficherlistecourseComponent } from './afficherlistecourse/afficherlistecourse.component';

const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'modif-profil', component: ModifprofilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'creer-liste-course', component: CreerlistecourseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'liste', component: VoirlisteComponent },
  {path: 'mes-listes', component: VoirtouteslistesComponent},
  {path: 'mon-frigo', component: AfficherfrigoComponent},
  {path: 'mes-liste', component: AfficherlistecourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
