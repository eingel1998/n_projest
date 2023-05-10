import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
// imprtamos el modelo de cliente
import { Cliente } from "./Cliente";

export class Venta extends Model {
  public fechaVenta!: string;
  public subtotalVenta!: number;
  public impuestosVenta!: number;
  public descuentosVenta!: number;
  public totalVenta!: number;
}

export interface VentaI {
  fechaVenta: string;
  subtotalVenta: number;
  impuestosVenta: number;
  descuentosVenta: number;
  totalVenta: number;
}

Venta.init(
  {
    fechaVenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtotalVenta: {
      type: DataTypes.DECIMAL, // Corrección: utilizar DataTypes.DECIMAL en lugar de DataTypes.NUMBER si es un número decimal
      allowNull: false,
    },
    impuestosVenta: {
      type: DataTypes.DECIMAL, // Corrección: utilizar DataTypes.DECIMAL en lugar de DataTypes.NUMBER si es un número decimal
      allowNull: false,
    },
    descuentosVenta: {
      type: DataTypes.DECIMAL, // Corrección: utilizar DataTypes.DECIMAL en lugar de DataTypes.NUMBER si es un número decimal
      allowNull: false,
    },
    totalVenta: {
      type: DataTypes.DECIMAL, // Corrección: utilizar DataTypes.DECIMAL en lugar de DataTypes.NUMBER si es un número decimal
      allowNull: false,
    },
  },
  {
    tableName: "ventas",
    sequelize: database,
    timestamps: true,
  }
);
// Asociación la tabla cliente con la tabla venta
Venta.belongsTo(Cliente, { foreignKey: "clienteId" }); // Agrega una columna clienteId en la tabla ventas
