"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = require("./routes/userRoutes");
const config_1 = require("./config");
const app = (0, express_1.default)();
const port = config_1.config.PORT || 5000;
const uri = config_1.config.MONGODB_URI || "";
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api', userRoutes_1.indexRouter);
mongoose_1.default.connect(uri).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
