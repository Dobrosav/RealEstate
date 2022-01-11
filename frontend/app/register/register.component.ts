import { Component, OnInit } from '@angular/core';
import { Agencija } from 'src/models/Agencija';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private s:UserService) { }

  ngOnInit(): void {
    this.s.getAgencije().subscribe((data:Agencija[])=>{
      this.agencije=data;
    })
    this.captcha=this.makeid()
    this.s.getUsers().subscribe((data:User[])=>{
      this.users=data
    })
  }
  makeid():string {
    let result:string=""
    let array:string[]=["wheat","hide","concerned","letter","current","individual",
    "kept","voyage","sell","model","basic","half","serious","give","simply","donkey","material","another",
    "deep","using","relationship","health","fought","behind",
    "other","realize","changing","movie","temperature","claws",
    "door","tail","fairly","period","experiment","cheese",
    "consider","mother","appropriate","school","child","usually"]
    result=array[Math.floor(Math.random() * array.length)]
    return result;
}
  validateMail():boolean{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
      return true
    return false
  }
  validatePassword():boolean{
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(this.lozinka))
        return true
    return false
  }
  users:User[]=[]
  captcha:string
  captchaodgovor:string
  ime:string
  prezime:string;
  korime:string
  lozinka:string
  lozinkap:string
  grad:string
  datum:Date;
  email:string
  agencija:Agencija=null
  bl:string=""
  slika:File
  telefon:string
  tip:number;
  agencije:Agencija[]=[];
  poruka:string;
  checkImePrezimeIgrad():boolean{
    if(this.ime.length>3 && this.prezime.length>3 && this.grad.length>3 && this.korime.length>3 && this.email.length>5 && this.telefon.length>6)
      return true
    return false
  }
  checkUserExist():boolean{
    let u:User=this.users.filter(value=> value.email==this.email || value.korime==this.korime)[0]
    if(u)
      return true;
    return false;
  }
  checkPassword():boolean{
    return this.lozinka==this.lozinkap;
  }
  register(){
    if(this.captcha!=this.captchaodgovor){
      this.poruka="Captcha nije dobar"
      return;
    }
    if(!this.checkPassword() || !this.checkImePrezimeIgrad()){
      this.poruka="lozinke se ne podudaraju ili nesto niste uneli"
      return;
    }
    if(this.checkUserExist()){
      this.poruka="Postoji korime ili emali adresa probajte sa drugim podacima"
      return;
    }
    if(!this.validateMail()){
      this.poruka="mail nije validan"
      return;
    }
    if(!this.validatePassword()){
      this.poruka="lozinka nije u dobrom formatu"
      return
    }
    
    this.s.register(this.ime,this.prezime,this.korime,this.lozinka,this.grad,this.datum,this.email,this.agencija.pib,this.bl,this.slika,this.telefon,this.tip).subscribe((resp)=>{
      if(resp['message']=='user added'){
        alert("OK")
      }else{
        alert("ERROR")
      }
    })
    this.poruka="";
  }
  change(id:string):void{
    if(id=="")
    this.agencija=null
    else{
      this.agencija=this.agencije.filter(value=>value.pib==id)[0]
    }
   
  } 
}
