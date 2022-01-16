"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ads_controller_1 = require("../controllers/ads.controller");
const adsRouter = express_1.default.Router();
adsRouter.route('/getALl').get((req, res) => new ads_controller_1.AdsControler().getAll(req, res));
adsRouter.route('/getALlUnsold').get((req, res) => new ads_controller_1.AdsControler().getAllUnsold(req, res));
adsRouter.route('/newAd').post((req, res) => new ads_controller_1.AdsControler().insertAd(req, res));
adsRouter.route('/oglasiOdKorisnika').post((req, res) => new ads_controller_1.AdsControler().oglasiOdKorisnika(req, res));
adsRouter.route('/prodataNekretnina').post((req, res) => new ads_controller_1.AdsControler().prodataNekretnina(req, res));
adsRouter.route('/getAdById').post((req, res) => new ads_controller_1.AdsControler().getAdById(req, res));
adsRouter.route('/updateAdById').post((req, res) => new ads_controller_1.AdsControler().updateAdById(req, res));
adsRouter.route('/traziOsnovno').post((req, res) => new ads_controller_1.AdsControler().traziOsnovno(req, res));
exports.default = adsRouter;
//# sourceMappingURL=ads.router.js.map