import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private s:UserService, private r:Router) { }

  ngOnInit(): void {
    this.s.getUsePerUsername(sessionStorage.getItem('update')).subscribe((user:User)=>{
      this.userU=user
      this.ime=user.ime
      this.prezime=user.prezime
    })
  }
  userU:User;
  ime:string
  prezime:string;
  update(){
    this.s.updateUserbyAdmin(sessionStorage.getItem('update'),this.ime,this.prezime).subscribe(resp=>{
      alert(resp['message'])
      this.r.navigate(["admin/odobrik"])
    })
  }
}
