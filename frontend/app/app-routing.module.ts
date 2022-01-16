import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { AdminComponent } from './admin/admin.component';
import { ChangeDataAdComponent } from './change-data-ad/change-data-ad.component';
import { KupacComponent } from './kupac/kupac.component';
import { LoginComponent } from './login/login.component';
import { NaprednaPretragaComponent } from './napredna-pretraga/napredna-pretraga.component';
import { NewAgencyComponent } from './new-agency/new-agency.component';
import { NewMicrolocationComponent } from './new-microlocation/new-microlocation.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { NovaNekretninaComponent } from './nova-nekretnina/nova-nekretnina.component';
import { OdobrikorisnikaComponent } from './odobrikorisnika/odobrikorisnika.component';
import { ProdavacComponent } from './prodavac/prodavac.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { RegisterComponent } from './register/register.component';
import { UpdateKontaktComponent } from './update-kontakt/update-kontakt.component';
import { UpdateNekretnineProdataComponent } from './update-nekretnine-prodata/update-nekretnine-prodata.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UploadJSONComponent } from './upload-json/upload-json.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"promenaLozinke", component:PromenaLozinkeComponent},
  {path:"register", component:RegisterComponent},
  {path:"admin", component:AdminComponent},
  {path:"kupac", component:KupacComponent},
  {path:"prodavac", component:ProdavacComponent},
  {path:"admin/odobrik", component:OdobrikorisnikaComponent},
  {path:"admin/noviKorisnik", component:NewUsersComponent},
  {path:"admin/novaAgencija", component:NewAgencyComponent},
  {path:"admin/update", component:UpdateUserComponent},
  {path:"admin/novaMikrolokacija", component:NewMicrolocationComponent},
  {path:"prodavac/novaNekretnina", component:NovaNekretninaComponent},
  {path:"prodavac/updateSoldAd", component:UpdateNekretnineProdataComponent},
  {path:"prodavac/change", component:ChangeDataAdComponent},
  {path:"prodavac/uploadJSON", component:UploadJSONComponent},
  {path:"prodavac/updateKontakt",component:UpdateKontaktComponent},
  {path:"kupac/naprednaPretraga", component:NaprednaPretragaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
