import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  }
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
