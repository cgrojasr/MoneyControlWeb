export interface MovimientoModel {
  id_movimiento: number;
  id_usuario: string;
  id_tipo_movimiento: string;
  fecha: string;
  id_medio_financiero: number;
  id_moneda: string;
  monto: number;
  descripcion: string;
}
