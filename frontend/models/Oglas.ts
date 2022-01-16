import { Agency, Oglasivac } from "./Advertizer"

export class Oglas{
    id:number
    Name:string
    Type:string
    City:string
    Municipality:string
    Microlocation:string
    Street:string   
    Area:number
    Rooms:number
    ConstructionYear:number
    State:string
    Heating:string
    Floor:number
    TotalFloors:number
    Parking:string
    MonthlyUtilities:number
    Price:number
    About:string
    Characteristics:Array<string>
    images:Array<string>
    prodavac:string
    agencija:string
    sold:boolean
}