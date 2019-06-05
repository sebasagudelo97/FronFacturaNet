import {ModelUsuario} from './model-usuarioDTO';
import {ModelTipoPago} from './model-tipoPagoDTO';
import { ModelDetalleFactura } from './model-detalleFacturaDTO';

export class ModelFactura {
    private codigo: number;
    private empleado: ModelUsuario;
    private cliente: ModelUsuario;
    private fecha: Date;
    private tipoPago: ModelTipoPago;
    private valor: number;
    private listaProductos: Array<ModelDetalleFactura>;
}