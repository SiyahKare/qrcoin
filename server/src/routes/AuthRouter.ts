import * as CryptoJS from 'crypto-js';
import { NextFunction, Request, Response, Router } from 'express';
import { Guid } from "guid-typescript";
import * as jwt from 'jwt-simple';
import * as nodeMailer from 'nodemailer';
import { getRepository } from "typeorm";
import { Config } from "../config/config";

export class AuthRouter {

    router: Router

    constructor() {
        this.router = Router();
        this.init();

    }

    public async get(req: Request, res: Response, next: NextFunction) {
        res.status(400).send({});
    }

    init() {
        this.router.get('/', this.get.bind(this));
    }

}

const authRouter = new AuthRouter();
authRouter.init();

const router = authRouter.router;
export default router;
