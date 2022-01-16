"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/login').post((req, res) => new user_controller_1.UserController().login(req, res));
userRouter.route('/register').post((req, res) => new user_controller_1.UserController().register(req, res));
userRouter.route('/agencije').get((req, res) => new user_controller_1.UserController().sveAgencije(req, res));
userRouter.route('/kime').get((req, res) => new user_controller_1.UserController().Users(req, res));
userRouter.route('/getInvalidUser').get((req, res) => new user_controller_1.UserController().invalidUser(req, res));
userRouter.route('/confirm').post((req, res) => new user_controller_1.UserController().confirm(req, res));
userRouter.route('/delete').post((req, res) => new user_controller_1.UserController().delete(req, res));
userRouter.route('/getUsePerUsername').post((req, res) => new user_controller_1.UserController().getUsePerUsername(req, res));
userRouter.route('/updatuUser').post((req, res) => new user_controller_1.UserController().update(req, res));
userRouter.route('/addMicrolocation').post((req, res) => new user_controller_1.UserController().addMicroLocation(req, res));
userRouter.route('/getMicrolocation').get((req, res) => new user_controller_1.UserController().getMicrolocation(req, res));
userRouter.route('/changePasword').post((req, res) => new user_controller_1.UserController().changePassword(req, res));
userRouter.route('/updateKontakt').post((req, res) => new user_controller_1.UserController().updateKontakt(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map