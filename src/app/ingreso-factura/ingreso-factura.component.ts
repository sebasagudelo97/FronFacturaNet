import { Component, OnInit } from '@angular/core';
import { ModelFactura } from '../model/model-facturaDTO';
import { ModelDetalleFactura } from '../model/model-detalleFacturaDTO';
import { createFacturaService } from '../service/createFactura-service';
import { UserService } from '../service/user-service';
import { ModelProducto } from '../model/model-productoDTO';

@Component({
  selector: 'ing-factura',
  templateUrl: './ingreso-factura.component.html',
  providers:[createFacturaService,UserService]
  
})
export class ingresoFacturaComponent implements OnInit{

  factura:any;
  cliente:any
  empleado:any
  tipoPago:any
  detalle:any
  producto:any
  cantidad:any
  listaProductos =[]
  private productos: Array<ModelProducto>;

  constructor(private createFacturaService: createFacturaService, private userService: UserService){
    this.factura = new ModelFactura();
    this.detalle = new ModelDetalleFactura;
    
    
  }
  
  ngOnInit(){
    this.loadproductos();
  }

  

  public saveFacturaGenerar():void{
    this.factura.cliente = {codigo: this.cliente}
    this.factura.empleado = {codigo: this.empleado}
    this.factura.tipoPago = {codigo: this.tipoPago}
    this.factura.listaProductos = this.listaProductos;
    console.log(this.listaProductos);
    this.createFacturaService.saveFacturaGenerar(this.factura).subscribe(res =>{
      alert("Factura creada satisfactoriamente.")
      console.log(this.factura);
    });
  }

  public agregarProducto():void{
    this.listaProductos.push({cantidad:this.cantidad,producto:{codigo:this.producto}});
  }

  private loadproductos(): void{
    this.userService.getProductos().subscribe(product =>{
      this.productos = product;
    });
  }
}


