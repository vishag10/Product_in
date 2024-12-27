let API="http://localhost:3000";
let profile
document.getElementById("photo").addEventListener("change",async(e)=>{
    // console.log(e.target.files[0]);
    profile= await convertBase64(e.target.files[0])
    console.log(profile);
    
    
})
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", async (event) => {
       
        event.preventDefault();

       
        const carname= document.getElementById("name").value
        const brand= document.getElementById("brand").value
        const cc= document.getElementById("cc").value
        const fueltype = document.getElementById("fuelType").value
        const mileage= document.getElementById("mileage").value
        const color= document.getElementById("color").value
        const seats = document.getElementById("seats").value
        console.log(carname,brand,cc,seats,color,mileage,fueltype);
        

        

       

        try {
            const res= await fetch(API+"/api/addcar",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({carname,brand,cc,seats,color,mileage,fueltype,profile})
            })
            if(res.status==200){
                const {msg}=await res.json();
                alert(msg);
                
                
            }else{
                const {msg}=await res.json();
                alert(msg);
            }  
    
            
        } catch (error) {
            console.log(error);
            
        }

        
        
    });
})

function convertBase64(file){
    return new Promise((resolve, reject) =>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(fileReader.error)
        }
    })
}