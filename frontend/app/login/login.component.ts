import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oglas } from 'src/models/Oglas';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private s:UserService, private router:Router) { }

  ngOnInit(): void {
    this.s.getAllUnsold().subscribe((data:Oglas[])=>{
      this.ads=data
      let startpoz=this.ads.length-1
      let br=5
      while(br>0){
        this.ads2.push(this.ads[startpoz])
        startpoz--
        br--
    //    alert(this.ads2[0].About)
      }
      /*  for(let i=0; i<this.ads.length;i++)
        alert(this.ads[i].About)*/
    })
  }
  ads2:Oglas[]=[]
  ads:Oglas[]=[]
  poruka:string;
  korime:string;
  lozinka:string;
  login(){
    this.s.login(this.korime,this.lozinka).subscribe((user:User)=>{
      if(user){
        sessionStorage.setItem('user',user.korime);
        if(user.tip==0)
            this.router.navigate(['/admin'])
        else if(user.tip==1)
            this.router.navigate(['/kupac'])
        else 
          this.router.navigate(['/prodavac'])
      }
      else
        this.poruka="Bad data";
    })
  }
}
