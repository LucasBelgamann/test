import { INTEGER, BOOLEAN, Model } from 'sequelize';
import Meeting from './Meeting.model';
import User from './User.model';
import db from '.';

class Frequency extends Model {
  meetingId: number;
  userId: string;
  frequency: boolean;
}

Frequency.init({
  meetingId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  frequency: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'frequency',
  underscored: true,
  timestamps: false,
});

Meeting.belongsToMany(User, { 
  foreignKey: 'meetingId',
  as: 'meeting',
  through: Frequency
 });

User.belongsToMany(Meeting, { 
  foreignKey: 'userId',
  as: 'user',
  through: Frequency
});

export default Frequency;