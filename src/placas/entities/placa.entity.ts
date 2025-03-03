import { Timestamp } from "typeorm"

export class Placa {
    id:string
    placa:string
    marca:string
    modelo:number
    color:string
    fecha_ingreso:Timestamp
}
