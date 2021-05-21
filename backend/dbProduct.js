import mongoose from 'mongoose';

const prodSchema = mongoose.Schema({
    prod_name:String,
    prod_price:String,
    image:String,
    description:String
});

export default mongoose.model('products', prodSchema);