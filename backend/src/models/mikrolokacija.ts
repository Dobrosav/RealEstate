import  mongoose  from "mongoose";
const Schema=mongoose.Schema;

let Mikrolokacija=new Schema({
  grad:{
      type:String
  },
  Opstina:{
      type:String
  },
  mikrolokacije:{
      type:Array
  }  
})
export default mongoose.model('Mikrolokacija',Mikrolokacija,'mikrolokacije')