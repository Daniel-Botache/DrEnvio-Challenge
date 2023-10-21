"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStockHandler = void 0;
const Products_1 = __importDefault(require("../models/Products"));
const getStockHandler = async (req, res) => {
  try {
    const products = await Products_1.default.find({ existencia: { $gt: 0 } });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `${error}` });
  }
};
exports.getStockHandler = getStockHandler;
