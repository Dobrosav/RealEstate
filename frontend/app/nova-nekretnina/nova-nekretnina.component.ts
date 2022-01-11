import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Oglas } from 'src/models/Oglas';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nova-nekretnina',
  templateUrl: './nova-nekretnina.component.html',
  styleUrls: ['./nova-nekretnina.component.css']
})
export class NovaNekretninaComponent implements OnInit {

  constructor(private s:UserService) { }

  ngOnInit(): void {
    this.s.getAds().subscribe((data:Oglas[])=>{
      this.ads=data
      this.maxId();
    })
    alert(sessionStorage.getItem('user'))
    this.user=sessionStorage.getItem('user')
  }
  user:string
  Name:string
  City:string
  Municpality:string
  Microlocation:string
  Street:string
  Area:number
  Rooms:number
  ConstructionYear:number
  State:string
  Heating:string
  Floor:number
  TotalFloors:number
  Parking:string
  MonthlyUtilities:number
  About:string
  Price:number
  characteristic:string[]=[]

  max:number
  maxId():void{
    let max=0;
    this.ads.forEach((a)=>{
      if(a.id>max)
        max=a.id;
    })
    this.max=max;
  }
  ads:Oglas[]=[]
  change(value:string){
    if(!this.characteristic.includes(value))
      this.characteristic.push(value)
    else{
      let index=this.characteristic.indexOf(value)
      this.characteristic.splice(index,1)
    }
    alert(JSON.stringify(this.characteristic))    
  }
  add(){
    let max=this.max+1
      this.s.insertAd(max,this.Name,this.City,this.Municpality,this.Microlocation,this.Street,this.Area,this.Rooms,this.ConstructionYear,this.State,this.Heating,this.Floor,this.TotalFloors,this.Parking,this.MonthlyUtilities,this.About,this.Price,JSON.stringify(this.characteristic), this.user,null).subscribe((resp)=>{
        alert(resp['message'])
      })
  }
}
