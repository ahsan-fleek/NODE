"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class BaseModel {
    static fill(data, fillables) {
        for (const field of fillables) {
            const { column } = field;
            if (data[column] === undefined || data[column] === null) {
                data[column] = utils_1.Utils.getValueOfUnAssignedData(field);
            }
        }
        return data;
    }
}
exports.default = BaseModel;
//# sourceMappingURL=baseModel.js.map