import { Request, Response } from 'express';

export interface IApiResponseOptions {
    res: Response,
    code: number,
    status: boolean,
    responseCode: string,
    responseDescription: string | string[],
    data?: Record<string, any> | Record<string, any>[] | null,
    req?: Request,
    cleanDescription?: boolean
}
