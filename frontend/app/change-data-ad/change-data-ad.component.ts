import { Component, OnInit } from '@angular/core';
import { Oglas } from 'src/models/Oglas';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-data-ad',
  templateUrl: './change-data-ad.component.html',
  styleUrls: ['./change-data-ad.component.css']
})
export class ChangeDataAdComponent implements OnInit {

  constructor(private s:UserService) { }

  ngOnInit(): void {
    this.id=parseInt(sessionStorage.getItem('id'))
    this.s.getAdById(this.id).subscribe((data:Oglas)=>{
      this.ads=data
      this.Name=this.ads.Name
      this.City=this.ads.City
      this.Municpality=this.ads.Municipality
      this.Microlocation=this.ads.Municipality
      this.Street=this.ads.Street
      this.Area=this.ads.Area
      this.Rooms=this.ads.Rooms
      this.ConstructionYear=this.ads.ConstructionYear
      this.State=this.ads.State
      this.Heating=this.ads.Heating
      this.Floor=this.ads.Floor
      this.TotalFloors=this.ads.TotalFloors
      this.Parking=this.ads.Parking
      this.MonthlyUtilities=this.ads.MonthlyUtilities 
      this.About=this.ads.About
      this.Price=this.ads.Price
      this.characteristic=this.ads.Characteristics
      this.images=this.ads.images
    })
  }
  id:number
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
  images:string[]=[]

  ads:Oglas
  change(value:string){
    if(!this.characteristic.includes(value))
      this.characteristic.push(value)
    else{
      let index=this.characteristic.indexOf(value)
      this.characteristic.splice(index,1)
    }
    alert(JSON.stringify(this.characteristic))    
  }
  update(){
      this.s.updateById(this.id,this.Name,this.City,this.Municpality,this.Microlocation,this.Street,this.Area,this.Rooms,this.ConstructionYear,this.State,this.Heating,this.Floor,this.TotalFloors,this.Parking,this.MonthlyUtilities,this.About,this.Price,JSON.stringify(this.characteristic), JSON.stringify(this.images)).subscribe((resp)=>{
//        alert(resp)
        location.reload()
      })
  }

}
