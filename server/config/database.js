import Sequelize from 'sequelize';
import 'dotenv/config.js'

export const db = new Sequelize('ascend_capital', 'postgres', 'Kapil@123', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
