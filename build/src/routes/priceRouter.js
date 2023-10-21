"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getSpecialPriceHandler_1 = require("../handlers/getSpecialPriceHandler");
const priceRouter = (0, express_1.Router)();
priceRouter.get("/:user_id/:nombre_producto", getSpecialPriceHandler_1.getSpecialPriceHandler);
exports.default = priceRouter;
