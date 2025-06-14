import { ITodo, TodoFillable } from "../utils/interfaces/api/todo-interface";
import BaseModel from "./base-model";

class TodoModel extends BaseModel<ITodo> {
    protected static getFillable() {
        return TodoFillable;
    }

    public static create(data: Partial<ITodo>): ITodo {
        const fillables = this.getFillable();
        return this.fill(data, fillables);
    }
}

export default TodoModel;
