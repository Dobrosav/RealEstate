import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  constructor(private s:UserService, private r:Router){ }

  ngOnInit(): void {
    let username=sessionStorage.getItem('user')
    this.s.getUsePerUsername(username).subscribe((u:User)=>{
      this.user=u
    })
  }
  checkOldPassword():boolean{
    if(this.old==this.user.lozinka)
      return true
    return false
  }
  checkPasswordEqual():boolean{
    return this.lozinka==this.np
  }
  validatePassword():boolean{
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(this.lozinka))
        return true
    return false
  }
  old:string
  lozinka:string
  np:string  
  user:User
  poruka:string
  change(){
    if(!this.checkOldPassword()){
      this.poruka="stara lozinka nije dobra"
      return
    }
    if(!this.checkPasswordEqual()){
      this.poruka='lozinke se ne poklapaju'
      return
    }
    if(!this.validatePassword()){
      this.poruka="Lozinka nije jaka"
      return
    }
    this.s.changePassword(sessionStorage.getItem('user'),this.lozinka).subscribe(resp=>{
      alert(resp['message'])
      sessionStorage.setItem('user',null)
      this.r.navigate(['/'])
    })
  }
}
