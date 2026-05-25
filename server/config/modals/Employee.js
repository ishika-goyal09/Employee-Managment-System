import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";
import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
     firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    basicSalary:{
        type:String,
        default:0
    },
    allowances:{
        type:String,
        default:0
    },
    deductions:{
        type:String,
        default:0
    },
   employmentStatus:{
    type:String,
    enum:["ACTIVE","INACTIVE"],
    default:"ACTIVE"
   },
   joinDate:{
        type:Date,
        required:true
    },
    isDeleted:{
        type:Boolean,
        required:false
    },
    bio:{
        type:String,
        default:""
    },
    department:{
        type:String,
        enum:DEPARTMENTS
    },
},{timestamps:true})

const Employee = mongoose.models.Employee || mongoose.model
("Employee",employeeSchema)

export default Employee;