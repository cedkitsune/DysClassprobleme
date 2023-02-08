import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { SeconnecterComponent } from './pages/seconnecter/seconnecter.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { CompteclassComponent } from './pages/compteclass/compteclass.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"exercice",component:ExercicesComponent},
  {path:"seconnecter",component:SeconnecterComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"compteclass",component:CompteclassComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
