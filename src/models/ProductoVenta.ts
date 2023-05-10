import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

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
