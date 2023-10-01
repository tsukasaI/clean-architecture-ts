import { ShopController } from "../../adapters/controllers/shopController"

export interface Controllers {
    shop: ShopController
}

export interface ServerDriver {
    run(): Promise<void>
}
