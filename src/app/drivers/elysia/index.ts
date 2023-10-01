import { Elysia } from "elysia";
import { ServerDriver } from "../web";
import { ElysiaRouter } from "./router";
import { Controllers } from "../web";

export class ElysiaDriver implements ServerDriver {
  private app: Elysia;
  private port: number;
  private controllers: Controllers;

  public constructor(port: number = 3000, controllers: Controllers) {
    this.app = new Elysia();
    this.port = port;
    this.controllers = controllers;
  }

  public async run() {
    this.app = new ElysiaRouter(this.app).init(this.controllers);
    this.app.listen(this.port);
    console.debug(
      `🦊 Elysia is running at ${this.app.server?.hostname}:${this.app.server?.port}`
    );
  }
}
