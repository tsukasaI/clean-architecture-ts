import { ShopRepositoryInterface } from "../adapters/repositories/shopRepository";

export type ShopEntry = {
  id: string;
  name: string;
  score: number;
};

export type ShopReadUsecaseResponse = ShopEntry;

export interface ShopReadUsecaseInterface {
  findOne(name: string): Promise<ShopReadUsecaseResponse>;
}

export class ShopReadUsecase implements ShopReadUsecaseInterface {
  private shopRepository: ShopRepositoryInterface;

  public constructor(shopRepository: ShopRepositoryInterface) {
    this.shopRepository = shopRepository;
  }

  public async findOne(id: string): Promise<ShopReadUsecaseResponse> {
    const res = await this.shopRepository.findOne(id);
    if (!res) {
      throw new Error("shop not found");
    }

    return {
      id: res.id,
      name: res.name,
      score: res.score,
    };
  }
}
