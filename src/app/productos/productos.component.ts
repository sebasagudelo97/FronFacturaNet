import { ModelProducto } from '../modelo/productoDTO';
import { Component, OnInit } from '@angular/core';
import { ServicioUsuario } from '../Conexion/servicioUsuario';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  providers: [ServicioUsuario]
  
})
export class ProductosComponent implements OnInit {
  public productos: Array<ModelProducto>;
  constructor(private userService: ServicioUsuario){}

  ngOnInit(){
    this.loadUsers();
  }

  private loadUsers(): void{
    this.userService.getProductos().subscribe(res =>{
      this.productos = res;
    });
  }
}
