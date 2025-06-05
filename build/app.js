"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const todo_1 = __importDefault(require("./routes/todo"));
const system_1 = __importDefault(require("./routes/system"));
const default_1 = require("./controllers/global/default");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const registerRoutes = () => {
    app.use('/api/system/', system_1.default);
    app.use('/api/todo/', todo_1.default);
    app.use('/', default_1.defaultRoutes);
    // Global error handler
    app.use((err, req, res, next) => {
        console.error('Global error handler:', err);
        res.status(err.status || 500).json({
            message: err.message || 'Internal Server Error',
            error: err,
        });
    });
};
exports.registerRoutes = registerRoutes;
exports.default = app;
//# sourceMappingURL=app.js.map