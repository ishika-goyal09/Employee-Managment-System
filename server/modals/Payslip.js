// import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";
import mongoose from "mongoose";

const payslipSchema = new mongoose.Schema({
    employeeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee",
        required:true,
    },
    month:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        default:null
    },
     basicSalary:{
        type:Number,
        default:null
    },
    allowances:{
        type:Number,
        default:0
    },
    deductions:{
        type:Number,
        default:0
    },
    netSalary:{
        type:Number,
        required:true
    }

},{timestamps:true})


const Payslip = mongoose.models.Payslip || mongoose.model
("Payslip",payslipSchema)

export default Payslip;