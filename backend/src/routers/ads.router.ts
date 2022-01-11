import  express  from "express";
import { AdsControler } from "../controllers/ads.controller";

const adsRouter = express.Router();
adsRouter.route('/getALl').get(
    (req,res)=>new AdsControler().getAll(req,res)    
)
adsRouter.route('/getALlUnsold').get(
    (req,res)=>new AdsControler().getAllUnsold(req,res)    
)
adsRouter.route('/newAd').post(
    (req,res)=>new AdsControler().insertAd(req,res)
)
adsRouter.route('/oglasiOdKorisnika').post(
    (req,res)=>new AdsControler().oglasiOdKorisnika(req,res)
)
adsRouter.route('/prodataNekretnina').post(
    (req,res)=>new AdsControler().prodataNekretnina(req,res)
)
adsRouter.route('/getAdById').post(
    (req,res)=>new AdsControler().getAdById(req,res)
)
adsRouter.route('/updateAdById').post(
    (req,res)=>new AdsControler().updateAdById(req,res)
)
export default adsRouter