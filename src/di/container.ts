import { ShopController } from "../app/adapters/controllers/shopController";
import { ShopDataStore } from "../app/adapters/drizzle/shopDrizzle";
import { ShopRepository } from "../app/adapters/repositories/shopRepository";
import { ElysiaDriver } from "../app/drivers/elysia";
import { ShopStatic } from "../app/drivers/static/shopStatic";
import { ServerDriver } from "../app/drivers/web";
import { ShopListUsecase } from "../app/usecases/shopListUsecase";
import { ShopReadUsecase } from "../app/usecases/shopReadUsecase";

const shopDataStore = (): ShopDataStore => {
  switch (process.env.STORE_TYPE) {
    case "static":
      return new ShopStatic();
    default:
      throw new Error("unknown store type");
  }
};

const shopRepository = new ShopRepository(shopDataStore());
const shopReadUsecase = new ShopReadUsecase(shopRepository);
const shopListUsecase = new ShopListUsecase(shopRepository);

const constollers = {
  shop: new ShopController(shopReadUsecase, shopListUsecase),
};

const port = 3000;

const server = (): ServerDriver => {
  switch (process.env.SERVER_TYPE) {
    case "elysia":
      return new ElysiaDriver(port, constollers);
    default:
      throw new Error("unknown server type");
  }
};

server().run();
