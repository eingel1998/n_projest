import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Producto, ProductoI } from "../models/Producto";

export class ProductoController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Producto");
    } catch (error) {}
  }

  public async getAllProducto(req: Request, res: Response) {
    try {
      const producto: ProductoI[] = await Producto.findAll({
        where: { activo: true },
      }); // select * from clientes;
      res.status(200).json({ producto });
    } catch (error) {}
  }
  public async getProductoById(req: Request, res: Response) {
    try {
      const producto: ProductoI | null = await Producto.findByPk(
        req.params.id
      ); // select * from clientes where id = ?;
      res.status(200).json({ producto });
    } catch (error) {}
  }

  public async createProducto(req: Request, res: Response) {
    try {
      const body: ProductoI | any = req.body;
      const producto: ProductoI = await Producto.create(body); // insert into clientes values (body);
      res.status(200).json({ producto });
    } catch (error) {}
  }

  public async updateProducto(req: Request, res: Response) {
    try {
      let body: ProductoI | any = req.body;
      let id: number = parseInt(req.params.id);
      let producto: ProductoI | any = await Producto.findByPk(id);
      if (producto) {
        await producto.update(body);
        res.status(200).json({ producto });
      }
    } catch (error) {}
  }
  public async deleteProducto(req: Request, res: Response) {
    try {
      let id: number = parseInt(req.params.id);
      let producto: ProductoI | any = await Producto.findByPk(id);
      if (producto) {
        await producto.update({ activo: false });
        res.status(200).json({ producto });
      }
    } catch (error) {}
  }
}