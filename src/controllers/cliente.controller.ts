import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Cliente, ClienteI } from "../models/Cliente";

export class ClienteController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Cliente");
    } catch (error) {}
  }

  public async getAllCliente(req: Request, res: Response) {
    try {
      const cliente: ClienteI[] = await Cliente.findAll({
        where: { activo: true },
      }); // select * from clientes;
      res.status(200).json({ cliente });
    } catch (error) {}
  }

  public async getCliente(req: Request, res: Response) {
    try {
      let cliente: ClienteI | any = await Cliente.findOne(
        { where: { id: req.params.id, activo: true } },
      );
      if (cliente) {
        res.status(200).json({ cliente });
      }else{
        res.status(404).json({ msg: "Cliente no encontrado" });
      }
    } catch (error) {}
  }

  public async createCliente(req: Request, res: Response) {
    try {
      let body: ClienteI | any = req.body;
      let cliente: ClienteI = await Cliente.create(body);
      res.status(200).json({ cliente });
    } catch (error) {}
  }

  public async updateCliente(req: Request, res: Response) {
    try {
      let body: ClienteI | any = req.body;
      let id: number = parseInt(req.params.id);
      let cliente: ClienteI | any = await Cliente.findByPk(id);
      if (cliente) {
        await cliente.update(body);
        res.status(200).json({ cliente });
      }
    } catch (error) {}
  }

  public async deleteCliente(req: Request, res: Response) {
    try {
      let id: number = parseInt(req.params.id);
      let cliente: ClienteI | any = await Cliente.findByPk(id);
      if (cliente) {
        await cliente.update({ activo: false });
        res.status(200).json({ cliente });
      }
    } catch (error) {}
  }

}
