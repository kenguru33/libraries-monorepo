"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meeting = void 0;
var class_validator_date_1 = require("class-validator-date");
var class_validator_1 = require("class-validator");
var Meeting = /** @class */ (function () {
    function Meeting() {
    }
    __decorate([
        class_validator_1.IsString()
    ], Meeting.prototype, "name", void 0);
    __decorate([
        class_validator_date_1.IsAfterDate('endTime')
    ], Meeting.prototype, "endTine", void 0);
    return Meeting;
}());
exports.Meeting = Meeting;
var meeting = new Meeting();
meeting.name = 'Møte';
meeting.startTime = '2020-04-30T09:45:00';
meeting.endTine = '2020-04-30T09:45:00';
var error = class_validator_1.validateSync(meeting);
console.log(error);
