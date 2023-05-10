import { Request, Response, Application, Router } from "express";

import { ProductoVentaController } from '../controllers/productoVenta.controller';

export class ProductoVentaRoutes {
    public productoVentaController: ProductoVentaController =  new ProductoVentaController();

    public routes(app: Application): void {
        app.route("/productoVenta/test").get(this.productoVentaController.test)
        app.route("/productoVenta").get(this.productoVentaController.getAllProductoVenta)
    }
}
