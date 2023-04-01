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
var Group_model_1 = require("./Group.model");
var _1 = require(".");
var Meeting = /** @class */ (function (_super) {
    __extends(Meeting, _super);
    function Meeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Meeting;
}(sequelize_1.Model));
Meeting.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: sequelize_1.DATE,
        allowNull: false,
        defaultValue: sequelize_1.NOW
    },
    groupId: {
        type: sequelize_1.INTEGER,
        allowNull: false
    }
}, {
    sequelize: _1["default"],
    modelName: 'meeting',
    underscored: true,
    timestamps: false
});
Meeting.belongsTo(Group_model_1["default"], { foreignKey: 'groupId', as: 'group' });
Group_model_1["default"].hasMany(Meeting, { foreignKey: 'groupId', as: 'group' });
exports["default"] = Meeting;
