import { state } from '@angular/animations';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Oglas } from 'src/models/Oglas';
import { UserService } from '../user.service';

@Component({
  selector: 'app-upload-json',
  templateUrl: './upload-json.component.html',
  styleUrls: ['./upload-json.component.css']
})
export class UploadJSONComponent implements OnInit {

  constructor(private s:UserService) { }
  ad:Oglas
  str:string
  ngOnInit(): void {
  }
  selectedFile:File
  onFileChanged(event){
    this.selectedFile = event.target.files[0]
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      alert(JSON.stringify(fileReader.result))
    let s =JSON.stringify(fileReader.result);
    this.str=s
  }
    fileReader.onerror = (error) => {
    console.log(error);
  }
  }
  Name:string
  City:string
  Municpality:string
  Microlocation:string
  Street:string
  Area:number
  tip:string="Stan"
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
  id:number
  sold:boolean
  korime:string
  agencija:string
  onUpload(){
    //this.ad=JSON.parse(this.str)
    this.str.replace('{','')
    this.str.replace('}','')
    let s=this.str.split(',')
    this.id=parseInt(s[0].split(':')[1])
    this.Name=s[1].split(':')[1]
    this.City=s[2].split(':')[1]
    this.Municpality=s[3].split(':')[1]
    this.Microlocation=s[4].split(':')[1]
    this.Street=s[5].split(':')[1]
    this.Area=parseInt(s[6].split(':')[1])
    this.Rooms=parseInt(s[7].split(':')[1])
    this.ConstructionYear=parseInt(s[8].split(':')[1])
    this.State=s[9].split(':')[1]
    this.Heating=s[10].split(':')[1]
    this.Floor=parseInt(s[11].split(':')[1])
    this.TotalFloors=parseInt(s[12].split(':')[1])
    this.Parking=s[13].split(':')[1]
    this.MonthlyUtilities=parseInt(s[14].split(':')[1])
    this.Price=parseInt(s[15].split(':')[1])
    this.About=s[16].split(':')[1]
    this.characteristic.push(s[17].split(':')[1])
    this.characteristic.push(s[18])
    this.characteristic.push(s[19])
    this.korime=s[22].split(':')[1]
    this.agencija=s[23].split(':')[1]
    this.s.insertAd(this.id,this.Name,this.tip,this.City,this.Municpality,this.Microlocation,this.Street,this.Area,this.Rooms,this.ConstructionYear,this.State,this.Heating,this.Floor,this.TotalFloors,this.Parking,this.MonthlyUtilities,this.About,this.Price,JSON.stringify(this.characteristic), this.korime,this.agencija).subscribe((resp)=>{
      alert(resp['message'])
    })
  }

}
