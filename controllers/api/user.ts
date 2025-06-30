import { Request, Response } from "express";
import { HttpStatusCode } from 'axios';
import { Utils } from "../../utils";
import UserService from "../../services/user"

const UserController = {
  
  signup: async (req: Request, res: Response) => {
    const user = await UserService.signupUser(req.body);
    Utils.apiResponse({
      res,
      code: HttpStatusCode.Ok,
      status: true,
      responseCode: '200',
      responseDescription: 'You have successfully Signup',
      data: user
    });
  },


  signin: async (req: Request, res: Response) => {
    const user = await UserService.signinUser(req.body);
    Utils.apiResponse({
      res,
      code: HttpStatusCode.Ok,
      status: true,
      responseCode: '200',
      responseDescription: 'You have successfully Signin',
      data: user
    });
  }



};

export default UserController;
