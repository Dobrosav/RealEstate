import express from 'express';
import { UserController } from '../controllers/user.controller';
const userRouter = express.Router();

userRouter.route('/login').post(
    (req, res)=>new UserController().login(req, res)
)

userRouter.route('/register').post(
    (req, res)=>new UserController().register(req, res)
)

userRouter.route('/agencije').get(
    (req,res)=>new UserController().sveAgencije(req,res)
)
userRouter.route('/kime').get(
    (req,res)=>new UserController().Users(req,res)
)
userRouter.route('/getInvalidUser').get(
    (req,res)=>new UserController().invalidUser(req,res)
)
userRouter.route('/confirm').post(
    (req,res)=>new UserController().confirm(req,res)
)
userRouter.route('/delete').post(
    (req,res)=>new UserController().delete(req,res)
)
userRouter.route('/getUsePerUsername').post(
    (req,res)=>new UserController().getUsePerUsername(req,res)
)
userRouter.route('/updatuUser').post(
    (req,res)=>new UserController().update(req,res)
)
userRouter.route('/addMicrolocation').post(
    (req,res)=>new UserController().addMicroLocation(req,res)
)
userRouter.route('/getMicrolocation').get(
    (req,res)=>new UserController().getMicrolocation(req,res)
)
userRouter.route('/changePasword').post(
    (req,res)=>new UserController().changePassword(req,res)
)
userRouter.route('/updateKontakt').post(
    (req,res)=>new UserController().updateKontakt(req,res)
)
export default userRouter;