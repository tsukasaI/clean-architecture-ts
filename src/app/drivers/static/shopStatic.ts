import { ShopDataStructure } from "../../adapters/repositories/shopRepository";

export interface ShopDataStore {
  list(): Promise<ShopDataStructure[]>;
  findOne(name: string): Promise<ShopDataStructure | null>;
}

export class ShopStatic implements ShopDataStore {
  private readonly store: ShopDataStructure[] = [
    { id: "1", name: "shop1", score: 10 },
    { id: "2", name: "shop2", score: 20 },
    { id: "3", name: "shop3", score: 30 },
    { id: "4", name: "shop4", score: 40 },
    { id: "5", name: "shop5", score: 50 },
    { id: "6", name: "shop6", score: 60 },
    { id: "7", name: "shop7", score: 70 },
    { id: "8", name: "shop8", score: 80 },
    { id: "9", name: "shop9", score: 90 },
  ];

  public async list(): Promise<ShopDataStructure[]> {
    const res = this.store;
    return res;
  }

  async findOne(id: string): Promise<ShopDataStructure | null> {
    const res = this.store.find((e) => e.id === id);
    if (typeof res === "undefined") {
      return null;
    }
    return res;
  }
}
