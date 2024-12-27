import express from 'express';
import connection from './connection.js';
import env from "dotenv";
import router from './router.js';

env.config()
const app = express()

app.use(express.static("../ClientSide"))
app.use(express.json({limit:"100mb"}))
app.use("/api",router)



connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started on port http://localhost:${process.env.PORT}`)
    })
})