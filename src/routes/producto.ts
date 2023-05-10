import { Request, Response, Application, Router } from "express";

import { ProductoController } from '../controllers/producto.controller';

export class ProductoRoutes {
    public productoController: ProductoController =  new ProductoController();

    public routes(app: Application): void {
        app.route("/producto/test").get(this.productoController.test)
        app.route("/producto").get(this.productoController.getAllProducto)
    }
}
