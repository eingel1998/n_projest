import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Venta } from "./Ventas";
import { Producto } from "./Producto";

export class ProductoVenta extends Model {
  public cantidadProductoVenta!: string;
  public precioProductoVenta!: string;
  public totalProductoVenta!: string;
}

export interface ProductoVentaI {
  cantidadProductoVenta: string;
  precioProductoVenta: string;
  totalProductoVenta: string;
}

ProductoVenta.init(
  {
    cantidadProductoVenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precioProductoVenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalProductoVenta: {
      type: DataTypes.DECIMAL, // Corrección: utilizar DataTypes.DECIMAL en lugar de DataTypes.NUMBER
      allowNull: false,
    },
  },
  {
    tableName: "productoVentas",
    sequelize: database,
    timestamps: true,
  }
);
// Asociación entre ProductoVenta y Venta
ProductoVenta.belongsTo(Venta, { foreignKey: "ventaId" }); // Agrega una columna ventaId en la tabla productoVentas
ProductoVenta.belongsTo(Producto, { foreignKey: "productoId" }); // Agrega una columna productoId en la tabla productoVentas