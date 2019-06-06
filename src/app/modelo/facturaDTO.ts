import {ModelUsuario} from './usuarioDTO';
import {ModelTipoPago} from './tipoPagoDTO';
import { ModelDetalleFactura } from './detalleFacturaDTO';

export class ModelFactura {
    private codigo: number;
    private empleado: ModelUsuario;
    private cliente: ModelUsuario;
    private fecha: Date;
    private tipoPago: ModelTipoPago;
    private valor: number;
    private listaProductos: Array<ModelDetalleFactura>;
}