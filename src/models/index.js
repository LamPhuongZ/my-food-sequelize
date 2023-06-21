import { Sequelize } from "sequelize";
import config from '../configs/config.js'

const sequelize = new Sequelize(config.database, config.user, config.pass, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
});

export default sequelize;