import {ModelProducto} from './model-productoDTO';
import {ModelFactura} from './model-facturaDTO';

export class ModelDetalleFactura{
    private codigo: number;
    private cantidad: number;
    private valor: number;
    private producto: ModelProducto;
    private factura: ModelFactura;
}