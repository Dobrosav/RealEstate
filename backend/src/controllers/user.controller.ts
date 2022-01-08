import * as express from 'express';
import agencija from '../models/agencija';
import User from '../models/user'
import Mikrolokacija from '../models/mikrolokacija';
import mikrolokacija from '../models/mikrolokacija';

export class UserController{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.korime;
        let password = req.body.lozinka;
        User.findOne({'korime': username, 'lozinka': password, 'valid':true}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user)
        })
    }
    getUsePerUsername=(req:express.Request, res: express.Response)=>{
        let korime=req.body.korime
        User.findOne({'korime':korime}, (err,user)=>{
            if(err) console.log(err)
            else res.json(user)
        })
    }
    sveAgencije=(req:express.Request, res:express.Response)=>{
        agencija.find({},(err,agencije)=>{
            if(err) console.log(err)
            else res.json(agencije)
        })   
    }
    register=(req:express.Request, res: express.Response)=>{
        let user=new User(req.body)
        user.save().then(
            user=>{
                res.status(200).json({'message': 'user added'});
            }).catch(err=>{
                res.status(400).json({'message': 'error'})
            }
        )
    }
    Users=(req:express.Request, res:express.Response)=>{
        User.find({},(err,users)=>{
            if(err) console.log(err)
            else res.json(users)
        })
    }
    invalidUser=(req:express.Request, res:express.Response)=>{
        User.find({"valid":false},(err,users)=>{
            if(err) console.log(err)
            else res.json(users)
        })
    }
    confirm=(req:express.Request, res:express.Response)=>{
        let korime=req.body.korime
        User.findOne({"korime":korime},(err,users)=>{
            if(err) console.log(err)
            else{
                if(users){
                    User.collection.updateOne({'korime':korime}, {$set: {'valid': true}});
                    res.json({'message': 'ok'})
                }
                else
                    res.json({'message': 'error'})
            }
        })   
    }
    update=(req:express.Request, res:express.Response)=>{
        let korime=req.body.korime
        let ime=req.body.ime
        let prezime=req.body.prezime
        User.findOne({"korime":korime},(err,users)=>{
            if(err) console.log(err)
            else{
                if(users){
                    User.collection.updateOne({'korime':korime}, {$set: {'ime':ime, 'prezime':prezime}});
                    res.json({'message': 'ok'})
                }
                else
                    res.json({'message': 'error'})
            }
        })
    }
    changePassword=(req:express.Request, res:express.Response)=>{
        let korime=req.body.korime
        let password=req.body.lozinka
        console.log(korime+" "+password)
        User.findOne({"korime":korime},(err,users)=>{
            if(err) console.log(err)
            else{
                if(users){
                    User.collection.updateOne({'korime':korime}, {$set: {'lozinka':password}});
                    res.json({'message': 'ok'})
                }
                else
                    res.json({'message': 'error'})
            }
        })

    }
    delete=(req:express.Request, res:express.Response)=>{
        let korime=req.body.korime
        User.findOne({"korime":korime},(err,users)=>{
            if(err) console.log(err)
            else{
                if(users){
                    User.collection.deleteOne({'korime':korime});
                    res.json({'message': 'ok'})
                }
                else
                    res.json({'message': 'error'})
            }
        })
    }
    addMicroLocation=(req:express.Request, res:express.Response)=>{
        let grad=req.body.grad
        let Opstina=req.body.Opstina
        let ml=req.body.mikrolokacije
        console.log(ml)
        Mikrolokacija.findOne({"grad":grad, 'Opstina':Opstina},(err,users)=>{
            if(err) console.log(err)
            else{
                if(users){
                    Mikrolokacija.collection.updateOne({"grad":grad, 'Opstina':Opstina}, {$push: {'mikrolokacije':ml}});
                    res.json({'message': 'ok'})
                }
                else
                    res.json({'message': 'error'})
            }
        })       
 
    }
    getMicrolocation=(req:express.Request, res:express.Response)=>{
        Mikrolokacija.find({},(err,m)=>{
            if(err) console.log(err)
            else res.json(m)
        })       
    }
}