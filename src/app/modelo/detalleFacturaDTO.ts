import {ModelProducto} from './productoDTO';
import {ModelFactura} from './facturaDTO';

export class ModelDetalleFactura{
    private codigo: number;
    private cantidad: number;
    private valor: number;
    private producto: ModelProducto;
    private factura: ModelFactura;
}