import { Request, Response } from "express";
import { where } from "sequelize/types";

import { ProductoVenta, ProductoVentaI } from "../models/ProductoVenta";

export class ProductoVentaController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Producto Venta");
    } catch (error) {}
  }

  public async getAllProductoVenta(req: Request, res: Response) {
    try {
      const productoVenta: ProductoVentaI[] = await ProductoVenta.findAll({
        where: { activo: true },
      }); // select * from clientes;
      res.status(200).json({ productoVenta });
    } catch (error) {}
  }
}