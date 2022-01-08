"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agency_controller_1 = require("../controllers/agency,controller");
const agencyRouter = express_1.default.Router();
agencyRouter.route('/register').post((req, res) => new agency_controller_1.agencyContrioller().register(req, res));
agencyRouter.route('/delete').post((req, res) => new agency_controller_1.agencyContrioller().delete(req, res));
exports.default = agencyRouter;
//# sourceMappingURL=agency.routes.js.map