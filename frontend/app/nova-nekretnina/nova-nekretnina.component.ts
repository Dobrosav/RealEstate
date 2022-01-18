import { Component, OnInit } from '@angular/core';
import { Oglas } from 'src/models/Oglas';
import { User } from 'src/models/user';
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
    this.s.getUsePerUsername(sessionStorage.getItem('user')).subscribe((data:User)=>{
      this.u=data
    })
    this.user=sessionStorage.getItem('user')
  }
  tip:string
  user:string
  u:User
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
  imageFiles:string[]=[]
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
  onFileSelected(event){
    if(event.target.files && event.target.files[0]){
      var reader=new FileReader()
      const img=new Image()
      const fup=(event.target.files)
      img.src=URL.createObjectURL(fup[0])
      img.onload=(e:any)=>{
          let h=e.path[0].height
          let w=e.path[0].width
          if(h<100 || w<100 || h>300 || w>300){
            alert("slika nije ok")    
            return
          }
      }
      reader.onload=(event:any)=>{
        var image=new Image()
        image.onload=()=>{
          alert(img.width)
          alert(img.height)
        };
        this.imageFiles.push(event.target.result);
      }
      reader.readAsDataURL(event.target.files[0])
   //   alert(this.imageFile)
    }
  }
  add(){
    let max=this.max+1
      this.s.insertAd1(max,this.Name,this.tip,this.City,this.Municpality,this.Microlocation,this.Street,this.Area,this.Rooms,this.ConstructionYear,this.State,this.Heating,this.Floor,this.TotalFloors,this.Parking,this.MonthlyUtilities,this.About,this.Price,JSON.stringify(this.characteristic), this.user,this.u.agencija, JSON.stringify(this.imageFiles)).subscribe((resp)=>{
        alert(resp['message'])
        location.reload()
      })
  }
}
