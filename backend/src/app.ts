import express, { Application } from "express";
import { json, urlencoded } from "body-parser";
import cookie from "cookie-parser";
import cors from "cors";

import http from "http";
import IController from "./interfaces/Controller";

class App {
  public app: Application;
  public port: any;

  constructor(controllers: IController[], port: any) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
    this.app.use(cookie());
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    const server = http.createServer(this.app);
    server.listen(this.port, () => console.log(`Server started on port ${this.port}`));
  }
}

export default App;
