import { Component, OnInit } from '@angular/core';
import { Agencija } from 'src/models/Agencija';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.component.html',
  styleUrls: ['./new-agency.component.css']
})
export class NewAgencyComponent implements OnInit {

  constructor(private s:UserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')!='Admin'){
      this.poruka="ACCESS FORBIDEN"
      return;
  }
    this.s.getAgencije().subscribe((data:Agencija[])=>{
      this.agencije=data
    })
  }
  agencije:Agencija[]=[]
  naziv:string
  grad:string
  telefon:string
  pib:string
  poruka:string
  adresa:string
  checkNazivGrad():boolean{
    if(this.naziv.length>3 && this.grad.length>3 && this.telefon.length>6)
      return true
    return false
  }
  ubaci(){
    if(!this.checkNazivGrad()){
      this.poruka="neispravni podaci"
      return
    }
    this.s.newAgency(this.naziv,this.grad,this.telefon,this.pib,this.adresa).subscribe((resp)=>{
      if(resp['message']=='agency added'){
        alert("OK")
      }else{
        alert("ERROR")
      }
      location.reload()
    })
    this.poruka=""
  }
  brisi(pib:string){
    this.s.deleteAgency(pib).subscribe(resp=>{
      alert(resp['message'])
      location.reload()
    })
  }
}
