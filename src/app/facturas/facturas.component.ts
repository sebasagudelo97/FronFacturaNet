import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user-service';
import { ModelUsuario } from '../model/model-usuarioDTO';

@Component({
  selector: 'app-factura',
  templateUrl: './facturas.component.html',
  providers: [UserService]
  
})
export class FacturaComponent implements OnInit {
  private users: Array<ModelUsuario>;
  constructor(private userService: UserService){}

  ngOnInit(){
    this.loadUsers();
  }

  private loadUsers(): void{
    this.userService.getUsers().subscribe(res =>{
      this.users = res;
    });
  }
}
