import Joi from 'joi';
import { REGEX } from '../../constant';

export const registerValidator = Joi.object({
    fullname: Joi.string().trim().required().min(3).max(100).label('Fullname'),
    email: Joi.string().trim().email().required().label('Email'),
    password: Joi.string().trim().pattern(REGEX.PASSWORD_REGEX).required().label('Password').messages({
        'string.pattern.base': 'Password minimum 8 characters and include uppercase, lowercase, number, and special characters.'
    }),
});

export const loginValidator = Joi.object({
    email: Joi.string().trim().email().required().label('Email'),
    password: Joi.string().trim().required().label('Password'),
});