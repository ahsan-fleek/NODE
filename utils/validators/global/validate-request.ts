import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { HttpStatusCode } from 'axios';
import { Utils } from '../..';

export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { 
      abortEarly: true,
      errors: {
        wrap: {
          label: ''
        }
      } 
    
    });
    if (error) {
      const message = error.details[0].message;
      Utils.apiResponse({
        res,
        code: HttpStatusCode.BadRequest,
        status: false,
        responseCode: '400',
        responseDescription: message,
      });
      return;
    }
    next();
  };
};
