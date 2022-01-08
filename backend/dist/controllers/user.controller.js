"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const agencija_1 = __importDefault(require("../models/agencija"));
const user_1 = __importDefault(require("../models/user"));
const mikrolokacija_1 = __importDefault(require("../models/mikrolokacija"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.korime;
            let password = req.body.lozinka;
            user_1.default.findOne({ 'korime': username, 'lozinka': password, 'valid': true }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.getUsePerUsername = (req, res) => {
            let korime = req.body.korime;
            user_1.default.findOne({ 'korime': korime }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.sveAgencije = (req, res) => {
            agencija_1.default.find({}, (err, agencije) => {
                if (err)
                    console.log(err);
                else
                    res.json(agencije);
            });
        };
        this.register = (req, res) => {
            let user = new user_1.default(req.body);
            user.save().then(user => {
                res.status(200).json({ 'message': 'user added' });
            }).catch(err => {
                res.status(400).json({ 'message': 'error' });
            });
        };
        this.Users = (req, res) => {
            user_1.default.find({}, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.invalidUser = (req, res) => {
            user_1.default.find({ "valid": false }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.confirm = (req, res) => {
            let korime = req.body.korime;
            user_1.default.findOne({ "korime": korime }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    if (users) {
                        user_1.default.collection.updateOne({ 'korime': korime }, { $set: { 'valid': true } });
                        res.json({ 'message': 'ok' });
                    }
                    else
                        res.json({ 'message': 'error' });
                }
            });
        };
        this.update = (req, res) => {
            let korime = req.body.korime;
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            user_1.default.findOne({ "korime": korime }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    if (users) {
                        user_1.default.collection.updateOne({ 'korime': korime }, { $set: { 'ime': ime, 'prezime': prezime } });
                        res.json({ 'message': 'ok' });
                    }
                    else
                        res.json({ 'message': 'error' });
                }
            });
        };
        this.changePassword = (req, res) => {
            let korime = req.body.korime;
            let password = req.body.lozinka;
            console.log(korime + " " + password);
            user_1.default.findOne({ "korime": korime }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    if (users) {
                        user_1.default.collection.updateOne({ 'korime': korime }, { $set: { 'lozinka': password } });
                        res.json({ 'message': 'ok' });
                    }
                    else
                        res.json({ 'message': 'error' });
                }
            });
        };
        this.delete = (req, res) => {
            let korime = req.body.korime;
            user_1.default.findOne({ "korime": korime }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    if (users) {
                        user_1.default.collection.deleteOne({ 'korime': korime });
                        res.json({ 'message': 'ok' });
                    }
                    else
                        res.json({ 'message': 'error' });
                }
            });
        };
        this.addMicroLocation = (req, res) => {
            let grad = req.body.grad;
            let Opstina = req.body.Opstina;
            let ml = req.body.mikrolokacije;
            console.log(ml);
            mikrolokacija_1.default.findOne({ "grad": grad, 'Opstina': Opstina }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    if (users) {
                        mikrolokacija_1.default.collection.updateOne({ "grad": grad, 'Opstina': Opstina }, { $push: { 'mikrolokacije': ml } });
                        res.json({ 'message': 'ok' });
                    }
                    else
                        res.json({ 'message': 'error' });
                }
            });
        };
        this.getMicrolocation = (req, res) => {
            mikrolokacija_1.default.find({}, (err, m) => {
                if (err)
                    console.log(err);
                else
                    res.json(m);
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map