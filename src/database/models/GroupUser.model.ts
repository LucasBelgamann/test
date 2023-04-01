import { INTEGER, Model } from 'sequelize';
import User from './User.model';
import Group from './Group.model';
import db from '.';

type GrupUserAtt = {
  groupId: number,
  userId: number,
}

class GroupUser extends Model<GrupUserAtt> {
  groupId: number;
  userId: number;
}

GroupUser.init({
  groupId: {
    type: INTEGER,
    allowNull: false,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'groupUser',
  underscored: true,
  timestamps: false,
});

Group.belongsToMany(User, {
  foreignKey: 'userId', as: 'user',
  through: GroupUser
});

User.belongsToMany(Group, {
  foreignKey: 'groupId', as: 'group',
  through: GroupUser
});

export default GroupUser;