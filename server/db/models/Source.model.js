import sequelize from "../sequelize-instance.js";
import { DataTypes } from "sequelize";

export const Source = sequelize.define("sources", {
  info_source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync();
