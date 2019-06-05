import { ModelProducto } from './../model/model-productoDTO';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user-service';
import { ModelUsuario } from '../model/model-usuarioDTO';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  providers: [UserService]
  
})
export class ProductosComponent implements OnInit {
  public productos: Array<ModelProducto>;
  constructor(private userService: UserService){}

  ngOnInit(){
    this.loadUsers();
  }

  private loadUsers(): void{
    this.userService.getProductos().subscribe(res =>{
      this.productos = res;
    });
  }
}
