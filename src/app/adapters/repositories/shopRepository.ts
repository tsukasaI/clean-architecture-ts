import { ShopDataStore } from "../drizzle/shopDrizzle";

export interface ShopRepositoryInterface {
  list(): Promise<ShopDataStructure[]>;
  findOne(id: string): Promise<ShopDataStructure | null>;
}

export interface ShopDataStructure {
  id: string;
  name: string;
  score: number;
}

export class ShopRepository implements ShopRepositoryInterface {
  private shopStore: ShopDataStore;

  public constructor(shopStore: ShopDataStore) {
    this.shopStore = shopStore;
  }

  public async list() {
    const res = await this.shopStore.list();
    return res.map(
      (i): ShopDataStructure => ({
        id: i.id || "0",
        name: i.name || "",
        score: i.score || 0,
      })
    );
  }

  public async findOne(id: string) {
    const res = await this.shopStore.findOne(id);
    return res;
  }
}
