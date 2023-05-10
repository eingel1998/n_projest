import { ClienteRoutes } from './cliente';
import { VentaRoutes } from './venta';
import {ProductoRoutes} from './producto';
import {ProductoVentaRoutes} from './productoVenta';
import {TipoProductoRoutes} from './tipoProducto';


export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public productoVentaRoutes: ProductoVentaRoutes = new ProductoVentaRoutes();
    public tipoProductoRoutes: TipoProductoRoutes = new TipoProductoRoutes();
}
