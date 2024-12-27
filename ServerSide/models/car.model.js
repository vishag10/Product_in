import mongoose from "mongoose";

const carSchema=new mongoose.Schema({
    carname:{type:String, required:true},
    // img:{type:String, required:true},
    brand:{type:String, required:true},
    color:{type:String, required:true},
    cc:{type:String, required:true},
    fueltype:{type:String, required:true},
    mileage:{type:String, required:true},
    seats:{type:String, required:true},
    profile:{type:String, required:true}

})
export default mongoose.model.Cars||mongoose.model("Cars",carSchema)