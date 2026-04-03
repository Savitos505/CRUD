import express from 'express'
import dotenv from 'dotenv';


const app = express()
app.use(express.json())
dotenv.config()

async function start(){
    try{
        const PORT = process.env.PORT || 3000
        app.listen(3000,()=>{
            console.log(`server start on http://localhost:${PORT}`);
        })

    }catch(e){
        throw new Error(e)
    }
}
start()
