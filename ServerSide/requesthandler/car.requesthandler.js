
import carSchema from "../models/car.model.js"
export async function addCar(req, res) {
    const {carname,brand,cc,seats,color,mileage,fueltype,profile}=req.body
    console.log(carname,brand,cc,seats,color,mileage,fueltype,profile);

    await carSchema.create({carname,brand,cc,seats,color,mileage,fueltype,profile}).then(()=>{
        res.status(200).send({msg:"Task added successfully"})
    }).catch((err)=>{
        res.status(400).send(err)
    })
    
    
}
export async function getCar(req,res){
    
        try {
            const data= await carSchema.find();
            
            
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error)
        }
    
    
}
