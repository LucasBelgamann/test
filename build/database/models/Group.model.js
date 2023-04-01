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
var _1 = require(".");
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Group;
}(sequelize_1.Model));
Group.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DATE,
        allowNull: false,
        defaultValue: sequelize_1.NOW
    },
    userId: {
        type: sequelize_1.INTEGER,
        allowNull: false
    }
}, {
    sequelize: _1["default"],
    modelName: 'groups',
    underscored: true,
    timestamps: false
});
Group.hasMany(User_model_1["default"], { foreignKey: 'userId', as: 'admin' });
User_model_1["default"].belongsTo(Group, { foreignKey: 'userId', as: 'admin' });
exports["default"] = Group;
