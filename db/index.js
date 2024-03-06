const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://dharadarsh0:Ad23adarsh@cluster0.hilwbtv.mongodb.net/")
.then(() => {
    console.log("mongodb is connected")
})
.catch(() => {
    console.log("error connecting to mongodb",error)
})

const customerSchema = new mongoose.Schema({
    email : String,
    password : String,
    balance : {type : Number, default : 0}
})



const shopSchema = new mongoose.Schema({
    ShopName : String,
    password : String,
    paymentReceived : {type : Number, default : 0}
})

const Customer = mongoose.model("Customer",customerSchema)
const Shop = mongoose.model("Shop",shopSchema)

module.exports = {
    Customer,Shop
}