import { Component, OnInit } from '@angular/core';
import { Oglas } from 'src/models/Oglas';
import { UserService } from '../user.service';

@Component({
  selector: 'app-prikaznekretnine',
  templateUrl: './prikaznekretnine.component.html',
  styleUrls: ['./prikaznekretnine.component.css']
})
export class PrikaznekretnineComponent implements OnInit {

  constructor(private s:UserService) { }

  ngOnInit(): void {
    let id=parseInt(sessionStorage.getItem('idn'))
    this.s.getAdById(id).subscribe((data:Oglas)=>{
      this.ad=data
      this.characteristic=this.ad.Characteristics
    })
  }
  ad:Oglas
  characteristic:string[]
}
