import { Controllers } from "../../web";

import { Elysia } from "elysia";

export class ElysiaRouter {
  private app: Elysia;

  public constructor(app: Elysia) {
    this.app = app;
  }

  public init(controllers: Controllers): Elysia {
    this.app.group("/shop", (app) =>
      app
        .get("/", async () => {
          const res = await controllers.shop.list();
          return res;
        })
        .get("/:id", async (req) => {
          const res = await controllers.shop.read(req.params.id);
          return res;
        })
    );

    return this.app
  }
}
