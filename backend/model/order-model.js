const mongoose = require("mongoose");

const orderSchma = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      default: "india",
    },
    pincode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },
  orderItems:[
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        product:{
            type:mongoose.Schema.ObjectId,
            ref:"Product",
            required:true
        }
    }
  ],    
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    require: true,
  },
  paymentInfo:{
    id:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
  },
  paidAt:{
    type:Date
  },
  itemsPrice:{
    type:Number,
    required: true,
    default:0
  },
  taxPrice:{
    type:Number,
    default:0,
    required: true,
  },
  shippingPrice:{
    type:Number,
    default:0,
    required: true,
  },
  totalPrice:{
    type:Number,
    default:0,
    required: true,
  },
  orderStatus:{
    type:String,
    require:true,
    default:"proccessing"
  },
  deliveredAt:Date,
  createdAt:{
    type:Date,
    default:Date.now()
  }
});

const Order=mongoose.model("Order",orderSchma)

module.exports=Order