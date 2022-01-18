import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oglas } from 'src/models/Oglas';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  constructor(private s:UserService, private r:Router) { }

  ngOnInit(): void {
    this.url=this.r.url
  }
  url:string
  poruka:string
  ads:Oglas[]=[]
  tip:string
  Mikrolokacija:string
  cenado:number
  kvadratura:number
  soba:number
  trazi(){
    if(!this.tip){
      this.poruka="tip je obavezan"
      return
    }
    this.s.traziOsnovno(this.tip).subscribe((data:Oglas[])=>{
      this.ads=data
     // alert(JSON.stringify(microlocation))
      if(this.Mikrolokacija){
        let m=this.Mikrolokacija.split('/')
          //alert(JSON.stringify(m))  
          this.ads=this.ads.filter(a=>{
            a.City==m[0] && a.Municipality==m[1] && a.Microlocation==m[2] 
        })
      }
      if (this.cenado)
        this.ads=this.ads.filter(a=> a.Price<this.cenado)
      if(this.kvadratura)
        this.ads=this.ads.filter(a=> a.Area>=this.kvadratura)
      if(this.soba)
        this.ads=this.ads.filter(a=>a.Rooms>=this.soba) 
        
    })
  }
  test(id:number){
    alert(id)
    sessionStorage.setItem('idn',id.toString())
    this.r.navigate(['kupac/prikaz'])
  }
}
