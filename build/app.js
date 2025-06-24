"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import routes
const todo_1 = __importDefault(require("./routes/todo"));
const system_1 = __importDefault(require("./routes/system"));
const user_1 = __importDefault(require("./routes/user"));
const default_1 = require("./controllers/global/default");
const errorHandler_1 = __importDefault(require("./utils/helpers/errorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express_1.default.json({ limit: "16kb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "16kb" }));
app.use((0, cookie_parser_1.default)());
const registerRoutes = () => {
    app.use('/api/system/', system_1.default);
    app.use('/api/todo/', todo_1.default);
    app.use('/api/user', user_1.default);
    app.use('/', default_1.defaultRoutes);
    app.use(errorHandler_1.default);
};
exports.registerRoutes = registerRoutes;
exports.default = app;
//# sourceMappingURL=app.js.map