"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var User_model_1 = require("./User.model");
var Group_model_1 = require("./Group.model");
var _1 = require(".");
var GroupUser = /** @class */ (function (_super) {
    __extends(GroupUser, _super);
    function GroupUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GroupUser;
}(sequelize_1.Model));
GroupUser.init({
    groupId: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    userId: {
        type: sequelize_1.STRING,
        allowNull: false
    }
}, {
    sequelize: _1["default"],
    modelName: 'groupUser',
    underscored: true,
    timestamps: false
});
Group_model_1["default"].belongsToMany(User_model_1["default"], {
    foreignKey: 'userId', as: 'user',
    through: GroupUser
});
User_model_1["default"].belongsToMany(Group_model_1["default"], {
    foreignKey: 'groupId', as: 'group',
    through: GroupUser
});
exports["default"] = GroupUser;
