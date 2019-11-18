import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';


const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'modif_profil', component: ModifprofilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
