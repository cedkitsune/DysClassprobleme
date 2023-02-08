import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Component
import { HeadersComponent } from './components/headers/headers.component';
import { FootersComponent } from './components/footers/footers.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SeconnecterComponent } from './pages/seconnecter/seconnecter.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { CompteclassComponent } from './pages/compteclass/compteclass.component';


// Module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ButtonModule} from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext';
import { PasswordModule} from 'primeng/password';
import { DividerModule} from 'primeng/divider'
import { HttpClientModule } from '@angular/common/http';


// service

// _helper
import { AuthInterceptorProviders} from './_helper/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FootersComponent,
    HomeComponent,
    ContactComponent,
    ExercicesComponent,
    SeconnecterComponent,
    CompteclassComponent,
    InscriptionComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CardModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
