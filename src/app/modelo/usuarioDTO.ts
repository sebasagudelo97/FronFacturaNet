import {ModelCiudad} from './ciudadDTO';
import {ModelTipoIdentificacion} from './tipoIdentificacionDTO';

export class ModelUsuario {
    private codigo: number;
    private identificacion: String;
    private tipoIdentificacion: ModelTipoIdentificacion;
    private nombre: String;
    private telefono: String;
    private direccion: String;
    private correoElectronico: String;
    private ciudadResidencia: ModelCiudad;
}