import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oglas } from 'src/models/Oglas';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-nekretnine-prodata',
  templateUrl: './update-nekretnine-prodata.component.html',
  styleUrls: ['./update-nekretnine-prodata.component.css']
})
export class UpdateNekretnineProdataComponent implements OnInit {

  constructor(private s:UserService, private r:Router) { }

  ngOnInit(): void {
    this.user=sessionStorage.getItem('user')
    this.s.getAllAdsPerUser(this.user).subscribe((data:Oglas[])=>{
      this.ads=data
    })
  }
  user:string
  ads:Oglas[]=[]
  changebyId(id:number){
    sessionStorage.setItem("id",id.toString())
    this.r.navigate(['/prodavac/change'])
  }
  soldbyId(id:number){
      this.s.updateAdSold(id).subscribe((resp)=>{
        alert(resp['message'])
        location.reload()
      })
  }
}
