import { Request, Response } from "express";
import { where } from "sequelize/types";

import { TipoProducto, TipoProductoI } from "../models/TipoProducto";

export class TipoProductoController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para tipo de prodducto");
    } catch (error) {}
  }

  public async getAllTipoProducto(req: Request, res: Response) {
    try {
      const tipoproducto: TipoProductoI[] = await TipoProducto.findAll({
        where: { activo: true },
      }); // select * from clientes;
      res.status(200).json({ tipoproducto });
    } catch (error) {}
  }
}