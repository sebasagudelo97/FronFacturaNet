import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './facturas/facturas.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { ingresoFacturaComponent } from './ingreso-factura/ingreso-factura.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  {path: '', component: FacturaComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'ingresoFactura', component: ingresoFacturaComponent},
  {path: 'ingresoFactura/productos', component: ProductosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    ingresoFacturaComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
