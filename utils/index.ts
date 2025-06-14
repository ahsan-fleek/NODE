import { IApiResponseOptions } from "./interfaces/global/general-interface";

export class Utils {
    
    static getCurrentDate(): Date {
        return new Date();
    }

    static getValueOfUnAssignedData(field: { columnDataType: string }) {
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

    public static apiResponse(options: IApiResponseOptions) {
        const {
            res,
            code,
            status,
            responseCode,
            responseDescription,
            data = {},
        } = options;
        return res.status(code).send({
            status,
            responseCode,
            responseDescription:  responseDescription,
            data: data || {},
        });
    }

}
