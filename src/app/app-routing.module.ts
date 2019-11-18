import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreerlistecourseComponent } from './creerlistecourse/creerlistecourse.component'
import { HomeComponent } from './home/home.component';
import { VoirlisteComponent } from './voirliste/voirliste.component';


const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'modif_profil', component: ModifprofilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'creer-liste-course', component: CreerlistecourseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'liste', component: VoirlisteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
