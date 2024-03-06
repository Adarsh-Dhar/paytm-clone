const {Shop} = require("../db/index")

const shopMiddleware = async (req,res,next) => {
    const {shopName,password} = req.headers
    try {
        if({shopName,password} = await Shop.find(shopName,password)){
            res.status(201).json({msg : "welcome to Adarsh's payment website"})
             next()
        } else {
            res.status(401).json({error : "wrong shop credentials"})
        }
    } catch(error) {
        res.status(500).json({error : "Internal Server Error"})
    }
 
}

module.exports = shopMiddleware