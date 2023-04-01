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
var Meeting_model_1 = require("./Meeting.model");
var User_model_1 = require("./User.model");
var _1 = require(".");
var Frequency = /** @class */ (function (_super) {
    __extends(Frequency, _super);
    function Frequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Frequency;
}(sequelize_1.Model));
Frequency.init({
    meetingId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: sequelize_1.INTEGER,
        allowNull: false
    },
    frequency: {
        type: sequelize_1.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: _1["default"],
    modelName: 'frequency',
    underscored: true,
    timestamps: false
});
Meeting_model_1["default"].belongsToMany(User_model_1["default"], {
    foreignKey: 'meetingId',
    as: 'meeting',
    through: Frequency
});
User_model_1["default"].belongsToMany(Meeting_model_1["default"], {
    foreignKey: 'userId',
    as: 'user',
    through: Frequency
});
exports["default"] = Frequency;
