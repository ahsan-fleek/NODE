"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = __importDefault(require("../controllers/api/todo"));
const asyncHandler_1 = require("../utils/helpers/asyncHandler");
const validate_request_1 = require("../utils/validators/global/validate-request");
const todo_2 = require("../utils/validators/api/todo");
const router = (0, express_1.Router)();
router.get("/", (0, asyncHandler_1.asyncHandler)(todo_1.default.getTodos));
router.post("/", (0, validate_request_1.validateRequest)(todo_2.createTodoValidator), (0, asyncHandler_1.asyncHandler)(todo_1.default.createTodo));
router.delete("/:id", (0, asyncHandler_1.asyncHandler)(todo_1.default.deleteTodo));
router.put("/:id", (0, validate_request_1.validateRequest)(todo_2.updateTodoValidator), (0, asyncHandler_1.asyncHandler)(todo_1.default.updateTodo));
exports.default = router;
//# sourceMappingURL=todo.js.map