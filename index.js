const express = require("express")

const app = express()
const cors = require("cors")
const customerRouter = require("./routes/customer")
const shopRouter = require("./routes/shop")


//middleware
app.use(cors())
app.use(express.json())


app.use("/customer",customerRouter)
app.use("/shop",shopRouter)


//port
const port = 3000


app.listen(port,console.log(`server is listening at port ${port}`))