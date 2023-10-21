"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bson_1 = require("bson");
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    _id: bson_1.ObjectId,
    existencia: Number,
    nombre: String,
    precio_base: Number,
});
const Products = (0, mongoose_1.model)('Products', productSchema);
exports.default = Products;
