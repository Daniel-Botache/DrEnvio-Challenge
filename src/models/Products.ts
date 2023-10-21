import { ObjectId } from 'bson';
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  _id:ObjectId,
  existencia: Number,
  nombre: String,
  precio_base: Number,
 
});

const Products = model('Products', productSchema);

export default Products;