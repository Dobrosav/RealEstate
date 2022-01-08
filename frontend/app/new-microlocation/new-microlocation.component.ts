import { Component, OnInit } from '@angular/core';
import { Mikrolokacija } from 'src/models/mikrolokacija';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-microlocation',
  templateUrl: './new-microlocation.component.html',
  styleUrls: ['./new-microlocation.component.css']
})
export class NewMicrolocationComponent implements OnInit {

  constructor(private s:UserService) { }

  ngOnInit(): void {
    this.s.getMicrolocation().subscribe((data:Mikrolokacija[])=>{
      this.Mikrolokacije=data
    })
  }
  Mikrolokacije:Mikrolokacija[]=[]
  grad:string
  Opstina:string
  ml:string
  changeGrad(grad:string):void{
    this.grad=grad
  }
  changeOpstina(Opstina:string):void{
    this.Opstina=Opstina;
  }
  add(){
    this.s.addMicrolocation(this.grad, this.Opstina, this.ml).subscribe(resp=>{
      alert(resp['message'])
      location.reload()
    })
  }
}
