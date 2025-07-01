import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: {
        type:String,
        require:true
    },
    items: {
        type:Object,
        require:true
    },
    amount: {
        type:Number,
        require:true
    },
    address: {
        type:Object,
        require:true
    },
    status: {   
        type:String,
        require:true,
        default:"Order placed"
    },
    paymentMethod: {
        type:String,
        require:true
    },
    payment : {
        type:Boolean,
        require:true,
        default:false
    },
    date: {
        type:Number,
        require:true
    }
}, {timestamps:true})
const Order = mongoose.model("Order",orderSchema)
export default Order