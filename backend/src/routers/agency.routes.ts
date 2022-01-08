import express from 'express'
import { agencyContrioller } from '../controllers/agency,controller'
const agencyRouter=express.Router()

agencyRouter.route('/register').post(
    (req,res)=>new agencyContrioller().register(req,res)
)
agencyRouter.route('/delete').post(
    (req,res)=>new agencyContrioller().delete(req,res)
)

export default agencyRouter