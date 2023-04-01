import { INTEGER, STRING, NOW, DATE, Model } from 'sequelize';
import Group from './Group.model';
import db from '.';

class Meeting extends Model {
  id: number;
  date: string;
  groupId: string;
}

Meeting.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW,
  },
  groupId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'meeting',
  underscored: true,
  timestamps: false,
});

Meeting.belongsTo(Group, { foreignKey: 'groupId', as: 'group' });
Group.hasMany(Meeting, { foreignKey: 'groupId', as: 'group' });

export default Meeting;