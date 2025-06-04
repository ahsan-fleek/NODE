"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = __importDefault(require("../controllers/api/todo"));
const asyncHandler_1 = require("../utils/helpers/asyncHandler");
const router = (0, express_1.Router)();
router.get("/", (0, asyncHandler_1.asyncHandler)(todo_1.default.getTodos));
router.post("/", (0, asyncHandler_1.asyncHandler)(todo_1.default.createTodo));
exports.default = router;
//# sourceMappingURL=todo.js.map