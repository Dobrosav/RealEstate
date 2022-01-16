import * as express from 'express';
import Oglas from '../models/oglas';

export class AdsControler{
    getAll=(req:express.Request, res:express.Response)=>{
        Oglas.find({},(err,ad)=>{
            if(err) console.log(err)
            else res.json(ad)
        })   
    }
    getAllUnsold=(req:express.Request, res:express.Response)=>{
        Oglas.find({'sold':false},(err,ad)=>{
            if(err) console.log(err)
            else res.json(ad)
        })   
    }
    insertAd=(req:express.Request, res:express.Response)=>{
        let id=parseInt(req.body.id)
        let Name=req.body.Name
        let Type=req.body.Type
        let City=req.body.City
        let Municpality=req.body.Municpality
        console.log(Municpality)
        let Microlocation=req.body.Microlocation
        let Street=req.body.Street
        let Area=parseInt(req.body.Area)
        let Rooms=parseInt(req.body.Rooms)
        let ConstructionYear=parseInt(req.body.ConstructionYear)
        let State=req.body.State
        let Heating=req.body.Heating
        let Floor=parseInt(req.body.Floor)
        let TotalFloor=parseInt(req.body.TotalFloors)
        console.log(TotalFloor)
        let Parking=req.body.Parking
        let MonthlyUtilities=req.body.MonthlyUtilities
        let About=req.body.About
        let Price=parseInt(req.body.Price)
        let characteristic=JSON.parse(req.body.characteristic)
        let images=["slika1.png"]
        let username=req.body.korime
        console.log(username)
        let agencija=req.body.agencija
        let sold=false
        let ad=new Oglas({id:id,Name:Name,Type:Type,City:City, Municipality:Municpality,Microlocation:Microlocation,
        Street:Street,Area:Area,Rooms:Rooms,ConstructionYear:ConstructionYear,
        State:State,Heating:Heating,Floor:Floor,TotalFloors:TotalFloor, Parking:Parking,MonthlyUtilities:MonthlyUtilities,
        About:About,Price:Price,Characteristics:characteristic,images:images,prodavac:username,agencija:agencija,sold:sold})
        ad.save().then(
            ad=>{
                res.status(200).json({'message': 'ad added'});
            }).catch(err=>{
                console.log(err)
                res.status(400).json({'message': 'error'})
            }   
            )
    }
    oglasiOdKorisnika=(req:express.Request, res:express.Response)=>{
        let korime=req.body.korime
        Oglas.find({'prodavac':korime},(err,ads)=>{
            if(err) console.log(err)
            else res.json(ads)
        })
    }
    prodataNekretnina=(req:express.Request, res:express.Response)=>{
        let id=parseInt(req.body.id)
        Oglas.findOne({"id":id},(err,users)=>{
            if(err) console.log(err)
            else{
                if(users){
                    Oglas.collection.updateOne({'id':id}, {$set: {'sold': true}});
                    res.json({'message': 'ok'})
                }
                else
                    res.json({'message': 'error'})
            }
        })
    }
    getAdById=(req:express.Request, res:express.Response)=>{
        let id=parseInt(req.body.id)
        Oglas.findOne({'id':id}, (err,ad)=>{
            if(err) console.log(err)
            else res.json(ad)
        })       
    }
    updateAdById=(req:express.Request, res:express.Response)=>{
        let id=parseInt(req.body.id)
        let Name=req.body.Name
        let City=req.body.City
        let Municpality=req.body.Municpality
        console.log(Municpality)
        let Microlocation=req.body.Microlocation
        let Street=req.body.Street
        let Area=parseInt(req.body.Area)
        let Rooms=parseInt(req.body.Rooms)
        let ConstructionYear=parseInt(req.body.ConstructionYear)
        let State=req.body.State
        let Heating=req.body.Heating
        let Floor=parseInt(req.body.Floor)
        let TotalFloor=parseInt(req.body.TotalFloors)
        console.log(TotalFloor)
        let Parking=req.body.Parking
        let MonthlyUtilities=req.body.MonthlyUtilities
        let About=req.body.About
        let Price=parseInt(req.body.Price)
        let characteristic=JSON.parse(req.body.characteristic)
        let images=JSON.parse(req.body.images)
        Oglas.findOne({"id":id},(err,users)=>{
            if(err) console.log(err)
            else{
                if(users){
                    Oglas.collection.updateOne({'id':id}, {$set: {'Name':Name,'City':City, 'Municipality':Municpality,'Microlocation':Microlocation,
                        'Street':Street,'Area':Area,'Rooms':Rooms,
                    'ConstructionYear':ConstructionYear,
                        'State':State,'Heating':Heating,'Floor':Floor,
                        'TotalFloors':TotalFloor, 'Parking':Parking,'MonthlyUtilities':MonthlyUtilities,
                        'About':About,'Price':Price,'Characteristics':characteristic,'images':images}});
                    res.json({'message': 'ok'})
                }
                else
                    res.json({'message': 'error'})
            }
        })
    }
    traziOsnovno=(req:express.Request, res:express.Response)=>{
        let tip=req.body.tip
        console.log(tip)
        Oglas.find({'sold':false, 'Type':tip},(err,ad)=>{
            if(err) console.log(err)
            else res.json(ad)
        })         

    }
}