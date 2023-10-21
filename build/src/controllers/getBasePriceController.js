"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("../models/Products"));
const getBasePriceController = async (productName) => {
  try {
    const product = await Products_1.default.findOne(
      { nombre: productName },
      "precio_base"
    );
    if (product) {
      return product;
    } else {
      throw new Error(
        "Producto no encontrado en la base de datos o no tiene precio base."
      );
    }
  } catch (error) {
    throw error;
  }
};
exports.default = getBasePriceController;
