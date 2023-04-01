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
var _1 = require(".");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(sequelize_1.Model));
User.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    role: {
        type: sequelize_1.STRING,
        allowNull: false
    }
}, {
    sequelize: _1["default"],
    modelName: 'users',
    underscored: true,
    timestamps: false
});
// User.belongsTo(Group, { foreignKey: 'userId', as: 'admin' });
exports["default"] = User;
