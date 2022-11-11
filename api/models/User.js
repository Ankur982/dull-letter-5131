const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: { type: String , required: true },
    email: { type: String , required: true , unique:true },
    password: { type: String , required: true , minlength: 6 },
    isAdmin: { type: Boolean , default: false  },
}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);