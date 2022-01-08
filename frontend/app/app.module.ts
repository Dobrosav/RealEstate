import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { KupacComponent } from './kupac/kupac.component';
import { ProdavacComponent } from './prodavac/prodavac.component';
import { OdobrikorisnikaComponent } from './odobrikorisnika/odobrikorisnika.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { NewAgencyComponent } from './new-agency/new-agency.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NewMicrolocationComponent } from './new-microlocation/new-microlocation.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    KupacComponent,
    ProdavacComponent,
    OdobrikorisnikaComponent,
    NewUsersComponent,
    NewAgencyComponent,
    UpdateUserComponent,
    NewMicrolocationComponent,
    PromenaLozinkeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
