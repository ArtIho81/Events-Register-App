import sequelize from "../sequelize-instance.js";
import { DataTypes } from "sequelize";

export const Event = sequelize.define("events", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  organizer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
sequelize.sync();
