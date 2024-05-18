import sequelize from "../sequelize-instance.js";
import { DataTypes } from "sequelize";

export const Participant = sequelize.define("participants", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birth_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

sequelize.sync();