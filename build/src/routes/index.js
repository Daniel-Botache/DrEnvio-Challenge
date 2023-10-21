"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stockRouter_1 = __importDefault(require("./stockRouter"));
const priceRouter_1 = __importDefault(require("./priceRouter"));
const router = (0, express_1.Router)();
router.use("/products", stockRouter_1.default);
router.use("/price", priceRouter_1.default);
exports.default = router;
