import { Component, OnInit } from '@angular/core';
import { Myadat } from 'src/adat.model';
import { firstappService } from 'src/firstapp.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  oldname: any;
  adat = new Myadat();

  constructor(public service: firstappService) { }

  ngOnInit(): void {
  
  }

  del(): void{
    if(this.oldname === undefined){console.log("Nope!")}
    else{
  for (var i =0; i < this.service.adatom.length;i++){
    if(this.service.adatom[i].name === this.oldname){
      localStorage.clear();
      


      


    
    }
  }
  
  
  }

}

}
