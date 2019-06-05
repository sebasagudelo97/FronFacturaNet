import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { ModelFactura } from '../model/model-facturaDTO';
import { ModeloRespuesta } from '../model/model-respuesta';
import { ModelPais } from '../model/model-paisDTO';



@Injectable()
export class createFacturaService{

    headers = new HttpHeaders({'Content-Type':'application/json'});
    constructor(private http:HttpClient){
        this.headers.append("Content-Type", "application/json");
    }

    public saveFacturaGenerar(factura: ModelFactura): Observable<any>{
        console.log(factura);
       return this.http.post("http://localhost:8080/api/factura",(factura),{headers: this.headers});
       
    }
}