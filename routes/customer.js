const customerMiddleware = require("../middleware/customer")
const {Customer} = require("../db/index")
const {Router} = require("express")
const router = Router()



//get user to signin
router.post("/signin",async (req,res) => {
   const {email,password} = req.body
   try {
    
        const createUser = await Customer.create({
            email : email,
            password : password
        })
        res.status(201).json(createUser)
      
       
   } catch(error) {
    res.status(500).json({error : "Internal Server Error"})
   }
  
})


//user to asign money
router.put("/money/:id",customerMiddleware ,async (req,res) => {
    const userMoney = req.body.Money
    console.log(userMoney)
    const id = req.params.id
    try {
        if(userMoney > 10000000) {
            res.status(401).json({msg : "Aukat mein reh"})
        } else {
            const postMoney =await Customer.findByIdAndUpdate({
                _id : id,
            },{
                balance : userMoney
            })
            res.status(201).json(postMoney)
        }
    } catch(error) {
        res.status(500).json({error : "Internal Server Error"})
    }
   
 })






 //user to make payment
router.post("/payment",customerMiddleware,async (req,res) => {
    
    const paymentMade = req.body.payment
   console.log(paymentMade)
        if(paymentMade) {
            const customer = req.customer
            
            const currentBalance = customer.balance
            const newBalance = currentBalance - paymentMade
            console.log(newBalance)

            const updatedCustomer = await Customer.findByIdAndUpdate(customer._id,{balance : newBalance},{new : true})
            res.status(201).json(updatedCustomer)
        }else{
            res.status(401).json({error : "no new payment is made"})
        }
    
    
 })

 module.exports = router



