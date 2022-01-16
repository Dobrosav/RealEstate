import { Component, OnInit } from '@angular/core';
import { Agencija } from 'src/models/Agencija';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-kontakt',
  templateUrl: './update-kontakt.component.html',
  styleUrls: ['./update-kontakt.component.css']
})
export class UpdateKontaktComponent implements OnInit {

  constructor(private s:UserService) { }

  ngOnInit(): void {
    let username=sessionStorage.getItem('user')
    this.s.getUsePerUsername(username).subscribe((data:User)=>{
      this.user=data
      this.kontakt=this.user.telefon
      this.email=this.user.email
      this.agencija.pib=this.user.agencija
    })
    this.s.getAgencije().subscribe((a:Agencija[])=>{
      this.agencije=a
    })
  }

  agencija:Agencija
  agencije:Agencija[]=[]
  kontakt:string
  email:string
  a:string
  user:User
  change(id:string):void{
    if(id=="")
    this.agencija=null
    else{
      this.agencija=this.agencije.filter(value=>value.pib==id)[0]
    }
  }
  update(){
    this.s.updateKontakt(sessionStorage.getItem('user'),this.kontakt,this.email,this.agencija.pib).subscribe((resp)=>{
      alert(resp)
    })
  }
}
