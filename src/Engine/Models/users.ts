import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import { v4 as uuidv4 } from "uuid";
export interface UsersAttributes {
  first_name?: string;
  last_name?: string;
  email?: string;
  guid?: string;
}

export class Users extends Model {
  id!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date;

  first_name!: string;
  last_name!: string;
  email!: string;
  guid!: string;
}

Users.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    guid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "users",
    sequelize,
    paranoid: true,
  }
);
