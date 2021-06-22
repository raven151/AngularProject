import { Component, OnInit } from '@angular/core';
import { firstappService } from 'src/firstapp.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  Myadat: any;
  
  

  constructor(public service: firstappService) {
     
   }


  ngOnInit(): void {

    if(this.service.adatom.length===0){
      this.service.fetch().subscribe(
          (data: any) => this.service.adatom = data.results,
          (error: any) => console.log(error),
          () =>console.log("Done")


      );}

     
  
}
}


  



