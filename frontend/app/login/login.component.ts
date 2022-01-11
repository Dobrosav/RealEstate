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
    this.s.getAds().subscribe((data:Oglas[])=>{
      this.ads=data
    })
  }
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
