const {Customer} = require("../db/index")

const customerMiddleware = async (req,res,next) => {
    const {email,password} = req.headers
   
   
    try {
        const findCustomer = await Customer.findOne({email,password})
        if(findCustomer){
            req.customer = findCustomer
            next()
        }
        
         else {
            res.status(401).json({error : "wrong user credentials"})
        }
    } catch(error) {
        res.status(500).json({error : "Internal Server Error"})
        console.log("hi")
        
    }
 
}

module.exports = customerMiddleware