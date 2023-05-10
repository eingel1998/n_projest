import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Venta, VentaI } from "../models/Ventas";

export class VentaController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Ventas");
    } catch (error) {}
  }

  public async getAllVenta(req: Request, res: Response) {
    try {
      const venta: VentaI[] = await Venta.findAll({
        where: { activo: true },
      }); // select * from clientes;
      res.status(200).json({ venta });
    } catch (error) {}
  }
}