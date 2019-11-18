import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreerlistecourseComponent } from './creerlistecourse/creerlistecourse.component'


const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'modif_profil', component: ModifprofilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'creer-liste-course', component: CreerlistecourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
