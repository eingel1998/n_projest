import { Request, Response, Application, Router } from "express";

import { ProductoController } from '../controllers/producto.controller';

export class ProductoRoutes {
    public productoController: ProductoController =  new ProductoController();

    public routes(app: Application): void {
        app.route("/producto/test").get(this.productoController.test)
        app.route("/producto").get(this.productoController.getAllProducto)
        app.route("/producto/:id").get(this.productoController.getProductoById)
        app.route("/producto").post(this.productoController.createProducto)
        app.route("/producto/:id").put(this.productoController.updateProducto)
        app.route("/producto/:id").delete(this.productoController.deleteProducto)

    }
}
