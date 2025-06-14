import { Utils } from "../utils";
import FillableField from "../utils/interfaces/global/fillable-field";

abstract class BaseModel<T> {
  protected static fill<T>(
    data: Partial<T>,
    fillables: FillableField[]
  ): T {
    for (const field of fillables) {
      const { column } = field;
      if (data[column as keyof T] === undefined || data[column as keyof T] === null) {
        data[column as keyof T] = Utils.getValueOfUnAssignedData(field) as T[keyof T];
      }
    }
    return data as T;
  }
}

export default BaseModel;
