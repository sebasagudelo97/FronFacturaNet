
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ModelUsuario } from '../modelo/usuarioDTO';
import { Observable } from 'rxjs';
import { ModelProducto } from '../modelo/productoDTO';

@Injectable()
export class ServicioUsuario{
    private users: Array<ModelUsuario>;
    private productos: Array<ModelProducto>;
    constructor(private http: HttpClient){

    }

    public getUsers():Observable<ModelUsuario[]>{
       return this.http.get<ModelUsuario[]>("http://localhost:8080/api/factura/usuarios");
    }

    public getProductos():Observable<ModelProducto[]>{
        return this.http.get<ModelProducto[]>("http://localhost:8080/api/factura/productos");
     }
}