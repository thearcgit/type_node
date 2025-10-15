import express from "express";
import type { Request, Response } from "express"; 

import routes from "./routes/index.routes.js"

const app = express()

app.use(express.json())
app.get(`/`,(req:Request,res:Response)=> {
    console.log("server is running with CI  test")
    res.json({message:`Server is running!`})
} )


app.use(`/api`,routes)


export default app