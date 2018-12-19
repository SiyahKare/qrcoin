import * as bodyParser from "body-parser";
import * as express from "express";
import * as passport from 'passport';
import corsPrefetch from './cors';
import AuthRouter from "./routes/AuthRouter";
import * as path from 'path';
import { Config } from "./config/config";
import { createConnection } from "typeorm";
require('./config/passport')(passport);

class App {
  public express;

  constructor() {
    this.express = express();
    this.middleware();
    this.database();
    this.routes();
  }

  private middleware(): void {
    this.express.use(corsPrefetch);
    this.express.use(bodyParser.json({ limit: '50mb' }));
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private async database(): Promise<void> {
    await createConnection(Config.db);
  }

  private routes(): void {
    let router = express.Router();
    this.express.use(/\/((?!api).)*/, function (req, res) {
      res.sendFile('index.html', { root: path.resolve(".") }, function (err) {
        if (err) {
          res.status(500).send(err)
        }
      })
    })

    this.express.use("/", router);
    this.express.use("/api/auth", AuthRouter);
  }
}

export default new App().express;
