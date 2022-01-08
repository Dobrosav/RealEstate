"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Oglas = new Schema({
    Name: {
        type: String
    },
    City: {
        type: String
    },
    Municipality: {
        type: String
    },
    Microlocation: {
        type: String
    },
    Street: {
        type: String
    },
    Area: {
        type: Number
    },
    Rooms: {
        type: Number
    },
    ConstructionYear: {
        type: Number
    },
    State: {
        type: String
    },
    Heating: {
        type: String
    },
    Floor: {
        type: Number
    },
    TotalFloors: {
        type: Number
    },
    Parking: {
        type: String
    },
    MonthlyUtilities: {
        type: Number
    },
    Price: {
        type: Number
    },
    About: {
        type: String
    },
    Characteristics: {
        type: Array
    },
    images: {
        type: Array
    },
    Advertiser: {
        type: Array
    },
    sold: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('Oglas', Oglas, 'oglasi');
//# sourceMappingURL=oglas.js.map