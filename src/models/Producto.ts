import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Producto extends Model {
  public nombreProducto!: string;
  public marcaProducto!: string;
  public precioProducto!: number;
  public stockMinProducto!: number;
  public cantidadProducto!: number;
}

export interface ProductoI {
  nombreProducto: string;
  marcaProducto: string;
  precioProducto: number;
  stockMinProducto: number;
  cantidadProducto: number;
}

Producto.init(
  {
    nombreProducto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marcaProducto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precioProducto: {
      type: DataTypes.INTEGER, // Corrección: utilizar DataTypes.INTEGER en lugar de DataTypes.NUMBER
      allowNull: false,
    },
    stockMinProducto: {
      type: DataTypes.INTEGER, // Corrección: utilizar DataTypes.INTEGER en lugar de DataTypes.NUMBER
      allowNull: false,
    },
    cantidadProducto: {
      type: DataTypes.INTEGER, // Corrección: utilizar DataTypes.INTEGER en lugar de DataTypes.NUMBER
      allowNull: false,
    },
  },
  {
    tableName: "productos",
    sequelize: database,
    timestamps: true,
  }
);
