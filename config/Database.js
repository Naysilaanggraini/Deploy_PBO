import { Sequelize } from "sequelize";

const db = new Sequelize('dbauth', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;