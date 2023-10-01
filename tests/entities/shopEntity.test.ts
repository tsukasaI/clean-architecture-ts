import { test, expect, describe } from "bun:test";
import { ShopProfileEntity } from "../../src/app/entities/shopProfileEntity";

test("ShopProfileEntity", () => {
  describe("good shop", () => {
    const goodShopProfile = new ShopProfileEntity("Good Shop", 81);

    expect(goodShopProfile.name).toBe("Good Shop");
    expect(goodShopProfile.isGoodShop).toBe(true);
  });
});
