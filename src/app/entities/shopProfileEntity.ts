export class ShopProfileEntity {
  public readonly name: string;
  public readonly score: number;
  public static readonly goodShopThreshold = 80;

  public constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }

  public get isGoodShop(): boolean {
    return this.score > ShopProfileEntity.goodShopThreshold;
  }
}
