import express from "express"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"
import 'dotenv/config'

connectDB()