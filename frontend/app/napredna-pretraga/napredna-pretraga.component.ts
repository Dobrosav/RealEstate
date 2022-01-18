import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Oglas } from 'src/models/Oglas';
import { UserService } from '../user.service';;
@Component({
  selector: 'app-napredna-pretraga',
  templateUrl: './napredna-pretraga.component.html',
  styleUrls: ['./napredna-pretraga.component.css']
})
export class NaprednaPretragaComponent implements OnInit {

  constructor(private s:UserService, private r:Router) { }
  totalRecords:number
  page:number
  ngOnInit(): void {
  }
  mincena:number
  maxcena:number
  minarea:number
  maxarea:number
  minsoba:number
  maxsoba:number
  mingodina:number
  maxgodina:number
  minsprat:number
  maxsprat:number
  minrezije:number
  maxrezije:number
  grejanje:string[]=[]
  change(value:string):void{
    if(!this.grejanje.includes(value))
      this.grejanje.push(value)
    else{
      let index=this.grejanje.indexOf(value)
      this.grejanje.splice(index,1)
  }
  alert(JSON.stringify(this.grejanje))
}
ads:Oglas[]=[]
  trazi(){
    this.s.getAllUnsold().subscribe((data:Oglas[])=>{
      this.ads=data
      this.totalRecords=this.ads.length
      if(this.mincena)
        this.ads=this.ads.filter(a=>a.Price>=this.mincena)
      if(this.maxcena)
        this.ads=this.ads.filter(a=>a.Price<=this.maxcena)
      if(this.minarea)
        this.ads=this.ads.filter(a=>a.Area>=this.minarea)
      if(this.maxarea)
        this.ads=this.ads.filter(a=>a.Area<=this.maxarea)
      if(this.minsoba)
        this.ads=this.ads.filter(a=>a.Rooms>=this.minsoba)
      if(this.maxsoba)
        this.ads=this.ads.filter(a=>a.Rooms<=this.maxsoba) 
      if(this.mingodina)
        this.ads=this.ads.filter(a=>a.ConstructionYear<=this.mingodina)
      if(this.maxgodina)
        this.ads=this.ads.filter(a=>a.ConstructionYear<=this.maxgodina)
      if(this.minsprat)
        this.ads=this.ads.filter(a=>a.Floor>=this.minsprat)
      if(this.maxsprat)
        this.ads=this.ads.filter(a=>a.Floor<=this.maxsprat)
      if(this.minrezije)
        this.ads=this.ads.filter(a=>a.MonthlyUtilities>=this.minrezije)
      if(this.maxrezije)
        this.ads=this.ads.filter(a=>a.MonthlyUtilities<this.maxrezije)
      if(this.grejanje.length>0)
        this.ads=this.ads.filter(a=>this.grejanje.includes(a.Heating))
    })    
  }
  test(id:number){
    alert(id)
    sessionStorage.setItem('idn',id.toString())
    this.r.navigate(['kupac/prikaz'])
  }
}
