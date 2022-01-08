"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agencyContrioller = void 0;
const agencija_1 = __importDefault(require("../models/agencija"));
class agencyContrioller {
    constructor() {
        this.register = (req, res) => {
            let a = new agencija_1.default(req.body);
            a.save().then(a => {
                res.status(200).json({ 'message': 'agency added' });
            }).catch(err => {
                res.status(400).json({ 'message': 'error' });
            });
        };
        this.delete = (req, res) => {
            let pib = req.body.pib;
            agencija_1.default.findOne({ "pib": pib }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    if (users) {
                        agencija_1.default.collection.deleteOne({ 'pib': pib });
                        res.json({ 'message': 'ok' });
                    }
                    else
                        res.json({ 'message': 'error' });
                }
            });
        };
    }
}
exports.agencyContrioller = agencyContrioller;
//# sourceMappingURL=agency,controller.js.map