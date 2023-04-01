import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.MYSQL_ROOT_PASSWORD || 'caminheirossenha',
  database: process.env.DB_NAME || 'caminheiros',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  define: {
    timestamps: true,
    underscored: true,
  }
}

export = config;