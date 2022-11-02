"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerWeb = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class ServerWeb {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
    }
    init() {
        this.app.get('/', (req, res) => {
            res.send('Express + TypeScript Server');
        });
        this.app.listen(this.port, () => {
            console.log(`[server]: Server is running 🚀 at https://localhost:${this.port}`);
        });
    }
}
exports.ServerWeb = ServerWeb;
