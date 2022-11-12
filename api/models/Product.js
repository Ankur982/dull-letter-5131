const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    brand: { type: String , required: true },
    name: { type: String , required: true },
    price: { type: Number , required: true },
    product_link: { type: String , required: true },
    description: { type: String , required: true  },
    product_type: { type: String , required: true },
    category: { type: String , required: true },
    
}, { timestamps: true });


module.exports = mongoose.model("Product", ProductSchema);

