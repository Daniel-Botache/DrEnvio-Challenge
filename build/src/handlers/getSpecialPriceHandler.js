"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecialPriceHandler = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const getBasePriceController_1 = __importDefault(require("../controllers/getBasePriceController"));
const getSpecialPriceHandler = async (req, res) => {
    var _a;
    const userId = req.params.user_id;
    const productName = req.params.nombre_producto;
    try {
        const user = await Users_1.default.findById(userId);
        console.log(user === null || user === void 0 ? void 0 : user.metadata);
        if (!user || !user.metadata || !user.metadata.precios_especiales) {
            res.status(404).json({ error: 'cliente no encontrado o no tiene precios especiales.' });
            return;
        }
        const specialPrice = (_a = user === null || user === void 0 ? void 0 : user.metadata) === null || _a === void 0 ? void 0 : _a.precios_especiales.find((price) => price.nombre_producto === productName);
        if (!specialPrice) {
            const basePrice = await (0, getBasePriceController_1.default)(productName);
            res.status(404).json({ producto: basePrice });
        }
        res.json(specialPrice);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: `${error}` });
    }
};
exports.getSpecialPriceHandler = getSpecialPriceHandler;
