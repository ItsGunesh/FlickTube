import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB=async()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDB connected successfully!")
    } catch (error) {
        console.error("Error: " , error)
    }
}

export default connectDB