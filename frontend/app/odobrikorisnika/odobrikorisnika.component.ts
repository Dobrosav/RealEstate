import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-odobrikorisnika',
  templateUrl: './odobrikorisnika.component.html',
  styleUrls: ['./odobrikorisnika.component.css']
})
export class OdobrikorisnikaComponent implements OnInit {

  constructor(private s:UserService, private r:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')!='Admin'){
      this.poruka="ACCESS FORBIDEN"
      return;
  }
    this.s.getInvalidUsers().subscribe((data:User[])=>{
      this.invalidUsers=data
    })
    this.s.getUsers().subscribe((data:User[])=>{
      this.allUsers=data
      this.allUsers=this.allUsers.filter(value=>value.korime!="Admin")
    })
  }
  poruka:string;
  allUsers:User[]=[]
  invalidUsers:User[]=[];
  confirm(korime:string){
    this.s.confirm(korime).subscribe(resp=>{
      alert(resp['message'])
      location.reload()
    })
  }
  update(korime:string){
    sessionStorage.setItem('update',korime);
    this.r.navigate(['/admin/update'])
  }
  deleteUser(korime:string){
    this.s.delete(korime).subscribe(resp=>{
      alert(resp['message'])
      location.reload()
    })
  }
}
