const mongoose = require("mongoose");

const productSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: [true, "Price must be provided"],
    },


    featured: {
        type: Boolean,
        default: false,
    }
})
module.exports = mongoose.model("Product", productSchema);