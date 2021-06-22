import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Myadat } from 'src/adat.model';
import { firstappService } from 'src/firstapp.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  adatom= new Myadat() ;
  oldname!: string;

  constructor(public service: firstappService) { }

  ngOnInit(): void {


  }



  modi(): void{
    if(this.adatom.index === undefined  || this.adatom.name === undefined || this.adatom.url === undefined ){

      console.log("Nope!");
    }
    else{
    for (var i =0; i < this.service.adatom.length;i++){
    if(this.service.adatom[i].name === this.oldname){


    this.service.adatom[i].index = (this.adatom.index);
    this.service.adatom[i].name = (this.adatom.name);
    this.service.adatom[i].url = (this.adatom.url);
    this.adatom = new Myadat();

    }}
    

  }
  }
}