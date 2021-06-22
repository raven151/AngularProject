import { Component, OnInit } from '@angular/core';
import { Myadat } from 'src/adat.model';
import { firstappService } from 'src/firstapp.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  adat= new Myadat() ;
  oldname!: string;
  

  constructor(public service: firstappService) { }

  ngOnInit(): void {


  }



  save(): void{
    if(this.adat.index === undefined  || this.adat.name === undefined || this.adat.url === undefined ){
    console.log("Nope!");
  }
  else{
    this.service.adatom.push(this.adat);
    this.adat = new Myadat;}
    

  }
}