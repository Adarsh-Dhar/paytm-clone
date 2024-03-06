const shopMiddleware = require("../middleware/shop")
const {Router} = require("express")
const router = Router()
const {Shop} = require("../db/index")

//shop login
router.post("/signup",async (req,res) => {
    const {shopName,password} = req.body
    try{
        const shopExists =await Shop.find({shopName,password})
    if(!shopExists) {
        const newShop = await Shop.create({
            shopName : shopName,
            password : password
        })
        res.status(201).json(newShop)
    }else{
        res.status(401).json({error : "shop already exists"})
    }
    }catch(error){
        res.status(500).json({error : "Internal Server Error"})
    }
})




//payment received by shop

router.put("/payment",shopMiddleware,async (req,res)=>{
    try{

    }catch(error){
        res.status(500).json({error : "Internal Server Error"})
    }
})

module.exports = router
