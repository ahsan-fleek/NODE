import Joi from 'joi';

export const createTodoValidator = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().required(),
});

export const updateTodoValidator = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
});