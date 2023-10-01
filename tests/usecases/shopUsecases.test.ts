import { test, expect, describe } from "bun:test";

import { ShopListUsecase } from "../../src/app/usecases/shopListUsecase";
import { ShopReadUsecase } from "../../src/app/usecases/shopReadUsecase";

import { ShopRepositoryInterface } from "../../src/app/adapters/repositories/shopRepository";

test("ShopUsecases", () => {
  const shopRepositoryMock: ShopRepositoryInterface = {
    findOne: async (id: string) => {
      if (id === "unexist") {
        return null;
      }
      return { id: "1", name: "exist store", score: 100 };
    },
    list: async () => [
      { id: "1", name: "exist store1", score: 50 },
      { id: "2", name: "exist store2", score: 80 },
      { id: "3", name: "exist store3", score: 81 },
    ],
  };

  describe("read usecase", async () => {
    const shopReadUsecase = new ShopReadUsecase(shopRepositoryMock);
    const existCase = await shopReadUsecase.findOne("1");
    expect(existCase).toEqual({ id: "1", name: "exist store", score: 100 });
  });

  describe("list usecase", async () => {
    const shopListUsecase = new ShopListUsecase(shopRepositoryMock);
    const res = await shopListUsecase.list();
    expect(res).toHaveLength(3)
    expect(res[0].isGood).toBe(false)
    expect(res[1].isGood).toBe(false)
    expect(res[2].isGood).toBe(true)
  });
});
