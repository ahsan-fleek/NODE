import FillableField from "../global/fillableField";

export interface ITodo {
    id?: string;
    title: string;
    description?: string;
    isCompleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export const TodoFillable: FillableField[] = [
    { column: 'title', columnDataType: 'string' },
    { column: 'description', columnDataType: 'string' },
    { column: 'isCompleted', columnDataType: 'boolean' },
    { column: 'createdAt', columnDataType: 'date' },
    { column: 'updatedAt', columnDataType: 'date' },
];
