import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  uri = 'http://localhost:4000';

  login(username, password){
    const data={
      korime: username,
      lozinka: password
    }

    return this.http.post(`${this.uri}/user/login`, data);
  }
  getAgencije(){
    return this.http.get(`${this.uri}/user/agencije`);
  }
  getUsers(){
    return this.http.get(`${this.uri}/user/kime`);
  }
  getInvalidUsers(){
    return this.http.get(`${this.uri}/user/getInvalidUser`);
  }
  register(ime,prezime,korime,lozinka,grad,datumRodjenja,email,Agencija,bl,slika,telefon,tip){
    const data={
      ime:ime,
      prezime:prezime,
      korime:korime,
      lozinka:lozinka,
      grad:grad,
      datumRodjenja:datumRodjenja,
      email:email,
      agencija:Agencija,
      brojLicence:bl,
      slika:slika,
      telefon:telefon,
      tip:tip,
      valid:false
    } 
    return this.http.post(`${this.uri}/user/register`, data)
   }
   confirm(korime){
     const data={
       korime:korime
      }
      return this.http.post(`${this.uri}/user/confirm`, data)
    }
    delete(korime){
      const data={
        korime:korime
      }
      return this.http.post(`${this.uri}/user/delete`, data)
    }
    newAgency(naziv,grad,telefon,pib,adresa){
      const data={
        naziv:naziv,
        grad:grad,
        telefon:telefon,
        pib:pib,
        adresa:adresa
      }
        return this.http.post(`${this.uri}/agency/register`, data)
    }
    deleteAgency(pib){
      const data={
        pib:pib
      }
      return this.http.post(`${this.uri}/agency/delete`, data)
    }
    getUsePerUsername(korime){
      const data={
        korime:korime
      }
      return this.http.post(`${this.uri}/user/getUsePerUsername`,data)
    }
    changePassword(korime,lozinka){
      alert("change password")
      const data={
        korime:korime,
        lozinka:lozinka
      }
      return this.http.post(`${this.uri}/user/changePasword`,data)
    }
    updateKontakt(korime,telefon,email,agencija){
      const data={
        korime:korime,
        telefon:telefon,
        email:email,
        agencija:agencija
      }
      return this.http.post(`${this.uri}/user/updateKontakt`,data)
    }
    updateUserbyAdmin(korime, ime, prezime){
      const data={
        korime:korime,
        ime:ime,
        prezime:prezime
      }
      return this.http.post(`${this.uri}/user/updatuUser`,data)
    }
    getMicrolocation(){
        return this.http.get(`${this.uri}/user/getMicrolocation`);
    }
    addMicrolocation(grad,Opstina,ml){
      const data={
        grad:grad,
        Opstina:Opstina,
        mikrolokacije:ml
      }
      return this.http.post(`${this.uri}/user/addMicrolocation`,data)
    }
    //ADS
    getAds(){
      return this.http.get(`${this.uri}/ads/getAll`)
    }
    insertAd1(id,Name,Type,City,Municpality,Microlocation,Street,Area,
      Rooms,
      ConstructionYear,
      State,
      Heating,
      Floor,
      TotalFloors,
      Parking,
      MonthlyUtilities,
      About,
      Price,
      characteristic,korime,agencija, images){
      const data={
        id:id,
        Name:Name,
        Type:Type,
        City:City,
        Municpality:Municpality,
        Microlocation:Microlocation,
        Street:Street,
        Area:Area,
        Rooms:Rooms,
        ConstructionYear:ConstructionYear,
        State:State,
        Heating:Heating,
        Floor:Floor,
        TotalFloors:TotalFloors,
        Parking:Parking,
        MonthlyUtilities:MonthlyUtilities,
        About:About,
        Price:Price,
        characteristic:characteristic,
        korime:korime,
        agencija:agencija,
        images:images
      }
      return this.http.post(`${this.uri}/ads/newAd`,data)
    }
    insertAd(id,Name,Type,City,Municpality,Microlocation,Street,Area,
      Rooms,
      ConstructionYear,
      State,
      Heating,
      Floor,
      TotalFloors,
      Parking,
      MonthlyUtilities,
      About,
      Price,
      characteristic,korime,agencija){
      const data={
        id:id,
        Name:Name,
        Type:Type,
        City:City,
        Municpality:Municpality,
        Microlocation:Microlocation,
        Street:Street,
        Area:Area,
        Rooms:Rooms,
        ConstructionYear:ConstructionYear,
        State:State,
        Heating:Heating,
        Floor:Floor,
        TotalFloors:TotalFloors,
        Parking:Parking,
        MonthlyUtilities:MonthlyUtilities,
        About:About,
        Price:Price,
        characteristic:characteristic,
        korime:korime,
        agencija:agencija
      }
      return this.http.post(`${this.uri}/ads/json`,data)
    }
    getAllAdsPerUser(korime){
       const data={
         korime:korime
        }
        return this.http.post(`${this.uri}/ads//oglasiOdKorisnika`,data)
    }
    updateAdSold(id){
      const data={
        id:id
      }
      return this.http.post(`${this.uri}/ads/prodataNekretnina`,data)
    }
    getAdById(id){
      const data={
        id:id
      }
      return this.http.post(`${this.uri}/ads/getAdById`,data)
    }
    updateById(id,
      Name,City,Municpality,Microlocation,Street,Area,
      Rooms,
      ConstructionYear,
      State,
      Heating,
      Floor,
      TotalFloors,
      Parking,
      MonthlyUtilities,
      About,
      Price,
      characteristic,images){
        const data={
          id:id,
          Name:Name,
          City:City,
          Municpality:Municpality,
          Microlocation:Microlocation,
          Street:Street,
          Area:Area,
          Rooms:Rooms,
          ConstructionYear:ConstructionYear,
          State:State,
          Heating:Heating,
          Floor:Floor,
          TotalFloors:TotalFloors,
          Parking:Parking,
          MonthlyUtilities:MonthlyUtilities,
          About:About,
          Price:Price,
          characteristic:characteristic,
          images:images
        }
        return this.http.post(`${this.uri}/ads/updateAdById`,data)        
      }
    getAllUnsold(){
      return this.http.get(`${this.uri}/ads/getALlUnsold`)
    }
    traziOsnovno(tip){
      const data={
        tip:tip
      }
      return this.http.post(`${this.uri}/ads/traziOsnovno`,data)
    }
  }

