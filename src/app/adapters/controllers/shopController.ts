import {
  ShopListUsecase,
  ShopListUsecaseResponse,
} from "../../usecases/shopListUsecase";
import {
  ShopReadUsecase,
  ShopReadUsecaseResponse,
} from "../../usecases/shopReadUsecase";

export type ShopReadConrollerResponse = ShopReadUsecaseResponse;
export type ShopListConrollerResponse = ShopListUsecaseResponse;

export class ShopController {
  private readUsecase: ShopReadUsecase;
  private listUsecase: ShopListUsecase;

  public constructor(
    readUsecase: ShopReadUsecase,
    listUsecase: ShopListUsecase
  ) {
    this.readUsecase = readUsecase;
    this.listUsecase = listUsecase;
  }

  public async read(id: string): Promise<ShopReadConrollerResponse> {
    const res = await this.readUsecase.findOne(id);
    return res;
  }

  public async list(): Promise<ShopListConrollerResponse> {
    const res = await this.listUsecase.list();
    return res;
  }
}
