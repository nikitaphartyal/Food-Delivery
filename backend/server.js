import express, { response } from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/UserRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import ordeRouter from "./routes/orderRoute.js"

//App config
const app = express()
const port = 4000

// Middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

// API Endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",ordeRouter)

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://greatstack:greatstack@cluster0.kn8gno6.mongodb.net/?