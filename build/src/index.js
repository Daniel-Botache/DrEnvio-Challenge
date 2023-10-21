"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = require("./db");
const port = process.env.PORT || 3000;
//Initializations
const app = (0, express_1.default)();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
(0, db_1.connect)();
//Middlewares
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
//Routes
app.use("/", routes_1.default);
module.exports = app;
