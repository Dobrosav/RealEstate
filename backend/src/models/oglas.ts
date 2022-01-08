import  mongoose  from "mongoose";
const Schema=mongoose.Schema

let Oglas=new Schema({
    Name:{
        type:String
    },
    City:{
        type:String
    },
    Municipality:{
        type:String
    },
    Microlocation:{
        type:String
    },
    Street:{
        type:String
    },
    Area:{
        type:Number
    },
    Rooms:{
        type:Number
    },
    ConstructionYear:{
        type:Number
    },
    State:{
        type:String
    },
    Heating:{
        type:String
    },
    Floor:{
        type:Number
    },
    TotalFloors:{
        type:Number
    },
    Parking:{
        type:String
    },
    MonthlyUtilities:{
        type:Number
    },
    Price:{
        type:Number
    },
    About:{
        type:String
    },
    Characteristics:{
        type:Array
    },
    images:{
        type:Array
    },
    Advertiser:{
        type:Array
    },
    sold:{
        type:Boolean
    }
})

export default mongoose.model('Oglas',Oglas,'oglasi')