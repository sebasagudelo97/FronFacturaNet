import { Component, OnInit } from '@angular/core';
import { ServicioUsuario } from '../Conexion/servicioUsuario';
import { ModelUsuario } from '../modelo/usuarioDTO';

@Component({
  selector: 'app-factura',
  templateUrl: './facturas.component.html',
  providers: [ServicioUsuario]
  
})
export class FacturaComponent implements OnInit {
  private users: Array<ModelUsuario>;
  constructor(private userService: ServicioUsuario){}

  ngOnInit(){
    this.loadUsers();
  }

  private loadUsers(): void{
    this.userService.getUsers().subscribe(res =>{
      this.users = res;
    });
  }
}
