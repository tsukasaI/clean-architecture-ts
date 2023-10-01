import { ShopDataStructure } from "../repositories/shopRepository";

export interface ShopDataStore {
  list(): Promise<ShopDataStructure[]>;
  findOne(id: string): Promise<ShopDataStructure | null>;
}
