import { Router} from "express";
import { clockInOut, getAttendance } from "../contollers/attendanceController"
import { protect } from "../middleware/auth.js"



const attendanceRouter = Router()

attendanceRouter.post('/',protect,clockInOut)
attendanceRouter.get('/',protect,getAttendance)

export default attendanceRouter;