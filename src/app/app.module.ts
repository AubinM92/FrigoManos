import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { CreerlistecourseComponent } from './creerlistecourse/creerlistecourse.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { AfficherfrigoComponent } from './afficherfrigo/afficherfrigo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AfficherlistecourseComponent } from './afficherlistecourse/afficherlistecourse.component';
import { ListeachatComponent } from './listeachat/listeachat.component';
import { RecettesComponent } from './recettes/recettes.component';
import { AjouterElementListeComponent } from './ajouter-element-liste/ajouter-element-liste.component';
import { AfficherunerecetteComponent } from './afficherunerecette/afficherunerecette.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModifelementlisteComponent } from './modifelementliste/modifelementliste.component';
import { ModifFrigoComponent } from './modif-frigo/modif-frigo.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { AjouterElementFrigoComponent } from './ajouter-element-frigo/ajouter-element-frigo.component';
import { ChoixajoutrecettelisteComponent } from './choixajoutrecetteliste/choixajoutrecetteliste.component';
import { MatSidenavModule, MatToolbarModule, MatSidenav } from '@angular/material';
import { AfficherenvieComponent } from './afficherenvie/afficherenvie.component';
import { AfficheruneenvieComponent } from './afficheruneenvie/afficheruneenvie.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CoursesValideesComponent } from './courses-validees/courses-validees.component';
import { InscriptionValideeComponent } from './inscription-validee/inscription-validee.component';
import { MessageComponent } from './message/message.component';
import { CreerRecetteComponent } from './creer-recette/creer-recette.component';

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
    AjouterElementListeComponent,
    AfficherunerecetteComponent,
    RecettesComponent,
    AjouterElementListeComponent,
    ModifelementlisteComponent,
    ModifFrigoComponent,
    AjouterElementFrigoComponent,
    ChoixajoutrecettelisteComponent,
    AjouterElementFrigoComponent,
    AfficherenvieComponent,
    AfficheruneenvieComponent,
    CoursesValideesComponent,
    InscriptionValideeComponent,
    MessageComponent,
    CreerRecetteComponent
  ],
  entryComponents: [CreerRecetteComponent, AjouterElementListeComponent, CreerlistecourseComponent, AjouterElementFrigoComponent, ModifFrigoComponent, AfficherunerecetteComponent, ModifFrigoComponent, ChoixajoutrecettelisteComponent, AfficheruneenvieComponent, CoursesValideesComponent, InscriptionValideeComponent, MessageComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    NgMultiSelectDropDownModule,
    MatSidenavModule, MatToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
