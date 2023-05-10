import { Request, Response, Application, Router } from "express";

import { TipoProductoController } from '../controllers/tipoProducto.controller';

export class TipoProductoRoutes {
    public tipoProductoController: TipoProductoController =  new TipoProductoController();

    public routes(app: Application): void {
        app.route("/tipoProducto/test").get(this.tipoProductoController.test)
        app.route("/tipoProducto").get(this.tipoProductoController.getAllTipoProducto)
    }
}
