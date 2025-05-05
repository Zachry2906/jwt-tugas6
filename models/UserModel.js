import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const User = db.define(
  "userss", // Nama Tabel
  {
    password: Sequelize.STRING,
    refresh_token : Sequelize.TEXT,
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    gender: Sequelize.STRING,
  }
);

db.sync().then(() => console.log("Database synced"));

export default User;
