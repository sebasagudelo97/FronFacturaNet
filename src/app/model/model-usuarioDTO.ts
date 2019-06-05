import {ModelCiudad} from './model-ciudadDTO';
import {ModelTipoIdentificacion} from './model-tipoIdentificacionDTO';

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