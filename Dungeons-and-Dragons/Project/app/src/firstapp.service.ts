import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Myadat } from "./adat.model";


@Injectable({

providedIn:'root'


})

export class firstappService{

public adatom: Myadat[] = [];

constructor(
    private http: HttpClient
){



}
public fetch(): Observable<any>{
    return this.http.get('https://www.dnd5eapi.co/api/classes/')
}


}