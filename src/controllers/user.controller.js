import {asyncHandler} from "../utils/asyncHandler.js"
import express from "express"

const router = express.Router()

router.post("/register", asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:"OK"
    })
}))

export {router as userRouter}