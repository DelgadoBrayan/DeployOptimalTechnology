import mongoose from "mongoose";

const productShema = mongoose.Schema(
    {
        nameProduct: {
        type:String,
        trim: true,
        require:true
    },    
          
    }, {timestamps:true}  
)


const Product = mongoose.model('product', productShema)

export default Product