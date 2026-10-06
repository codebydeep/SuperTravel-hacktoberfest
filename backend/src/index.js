import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "../utils/db.js"

dotenv.config()

const app = express()

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE'],
    credentials: true,
}))

connectDB()

app.listen(port, () => {
    console.log(`Server started on PORT: ${port}`);
})