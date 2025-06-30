import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from 'axios';
import { CustomError } from '../utils/errors/custom';
import SecurityManager from '../utils/helpers/security-manager';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) throw new CustomError(HttpStatusCode.Unauthorized, 'Invalid Token Provided');

    const token = authHeader.split(' ')[1];
    if (!token) throw new CustomError(HttpStatusCode.Unauthorized, 'No token provided');

    const decoded = SecurityManager.verifyToken(token);
    if (!decoded) throw new CustomError(HttpStatusCode.Unauthorized, 'Invalid Token Provided');

    (req as any).user = decoded;

    next();
  };
