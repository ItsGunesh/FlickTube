import express from "express"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"
import 'dotenv/config'
import app from "./app.js"

const port = process.env.PORT || 8000

app.use(express.json());

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})