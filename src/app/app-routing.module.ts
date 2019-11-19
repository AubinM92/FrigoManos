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
import { RecettesComponent } from './recettes/recettes.component';
import { ModifFrigoComponent } from './modif-frigo/modif-frigo.component';

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
  { path: 'recettes', component:RecettesComponent},
  {path: 'modif-frigo', component:ModifFrigoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
