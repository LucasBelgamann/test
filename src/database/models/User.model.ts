import { INTEGER, STRING, Model } from 'sequelize';
import Group from './Group.model';
import db from '.';

class User extends Model {
  id: number;
  name: string;
  phone: string;
  email:string;
  password: string;
  role: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  phone: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

// User.belongsTo(Group, { foreignKey: 'userId', as: 'admin' });

export default User;