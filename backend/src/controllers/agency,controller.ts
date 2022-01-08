import  * as express from 'express'
import agencija from '../models/agencija'
export class agencyContrioller{
    register=(req:express.Request, res:express.Response)=>{
        let a= new agencija(req.body)    
        a.save().then(
            a=>{
                res.status(200).json({'message': 'agency added'});
            }).catch(err=>{
                res.status(400).json({'message': 'error'})
            }

        )   
    }
    delete=(req:express.Request, res:express.Response)=>{
        let pib=req.body.pib
        agencija.findOne({"pib":pib},(err,users)=>{
            if(err) console.log(err)
            else{
                if(users){
                    agencija.collection.deleteOne({'pib':pib});
                    res.json({'message': 'ok'})
                }
                else
                    res.json({'message': 'error'})
            }
        })   
    }
}