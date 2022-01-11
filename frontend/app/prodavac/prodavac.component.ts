import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit(): void {
    this.link=this.r.url
  }
  link:string
}
