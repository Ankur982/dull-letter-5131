const express = require('express');

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const authRoute = require("./routes/auth")

const userRoute = require("./routes/user")

const productRoute = require("./routes/product")

const cartRoute = require("./routes/cart")

const orderRoute = require("./routes/order")

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth" , authRoute);

app.use("/users", userRoute);

app.use("/products", productRoute);

app.use("/carts", cartRoute);

app.use("/orders", orderRoute);

mongoose.connect( process.env.MONGO_URL )
.then(()=>{
    console.log("DB connection successfull")
})
.catch((err)=>{
    console.log(err)
});

app.listen( process.env.PORT || 8080, () => { 
    console.log('server started on port 8080');
});