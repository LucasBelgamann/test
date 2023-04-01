import { INTEGER, STRING, NOW, DATE, Model } from 'sequelize';
import User from './User.model';
import db from '.';

class Group extends Model {
  id: number;
  name: string;
  userId: string;
}

Group.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'groups',
  underscored: true,
  timestamps: false,
});

// Group.hasMany(User, { foreignKey: 'userId', as: 'admin' });
// User.belongsTo(Group, { foreignKey: 'userId', as: 'admin' });

export default Group;