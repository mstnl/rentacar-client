import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AracAramaComponent } from './components/arac-arama/arac-arama.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RezervasyonComponent } from './components/rezervasyon/rezervasyon.component';

import { AuthService } from './services/auth.service';
import { AracService } from './services/arac.service';
import { RezervasyonService } from './services/rezervasyon.service';
import { KullaniciService } from './services/kullanici.service';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AracAramaComponent,
    AdminComponent,
    NavbarComponent,
    RezervasyonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AracService,
    RezervasyonService,
    KullaniciService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
