import FillableField from "../global/fillable-field";

export interface ITodo {
    id?: string;
    title: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export const TodoFillable: FillableField[] = [
    { column: 'title', columnDataType: 'string' },
    { column: 'description', columnDataType: 'string' },
    { column: 'createdAt', columnDataType: 'date' },
    { column: 'updatedAt', columnDataType: 'date' },
];
