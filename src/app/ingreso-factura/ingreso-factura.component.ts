import { Component, OnInit } from '@angular/core';
import { ModelFactura } from '../modelo/facturaDTO';
import { ModelDetalleFactura } from '../modelo/detalleFacturaDTO';
import { conexionFactura } from '../Conexion/conexionFactura';
import { ServicioUsuario } from '../Conexion/servicioUsuario';
import { ModelProducto } from '../modelo/productoDTO';

@Component({
  selector: 'ing-factura',
  templateUrl: './ingreso-factura.component.html',
  providers:[conexionFactura,ServicioUsuario]
  
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

  constructor(private conexionFacturaService: conexionFactura, private userService: ServicioUsuario){
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
    this.conexionFacturaService.saveFacturaGenerar(this.factura).subscribe(res =>{
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


