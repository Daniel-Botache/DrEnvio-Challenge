"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getStockHandler_1 = require("../handlers/getStockHandler");
const stockRouter = (0, express_1.Router)();
stockRouter.get("/", getStockHandler_1.getStockHandler);
exports.default = stockRouter;
