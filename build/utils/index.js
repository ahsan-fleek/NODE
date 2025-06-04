"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static getCurrentDate() {
        return new Date();
    }
    static getValueOfUnAssignedData(field) {
        switch (field.columnDataType) {
            case 'string':
                return '';
            case 'boolean':
                return false;
            case 'date':
                return this.getCurrentDate();
            case 'number':
                return 0;
            case 'object':
                return {};
            case 'array':
                return [];
            default:
                return null;
        }
    }
    static apiResponse(options) {
        const { res, code, status, responseCode, responseDescription, data = {}, } = options;
        return res.status(code).send({
            status,
            responseCode,
            responseDescription: responseDescription,
            data: data || {},
        });
    }
}
exports.Utils = Utils;
//# sourceMappingURL=index.js.map