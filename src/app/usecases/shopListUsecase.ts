import { ShopRepositoryInterface } from "../adapters/repositories/shopRepository";
import { ShopProfileEntity } from "../entities/shopProfileEntity";

export type ShopEntry = {
  id: string;
  name: string;
  isGood: boolean;
};

export type ShopListUsecaseResponse = ShopEntry[];

export interface ShopListUsecaseInterface {
  list(): Promise<ShopListUsecaseResponse>;
}

export class ShopListUsecase implements ShopListUsecaseInterface {
  private shopRepository: ShopRepositoryInterface;

  public constructor(shopRepository: ShopRepositoryInterface) {
    this.shopRepository = shopRepository;
  }

  public async list(): Promise<ShopListUsecaseResponse> {
    const res = await this.shopRepository.list();
    return res.map((i): ShopEntry => {
      const profile = new ShopProfileEntity(i.name, i.score);
      return {
        id: i.id || "0",
        name: i.name || "",
        isGood: profile.isGoodShop,
      };
    });
  }
}
