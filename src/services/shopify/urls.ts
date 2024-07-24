import { env } from "../../config/env"

export const shopifyUrls = {
    products: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json`,
        mainProducts: `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/collections/289401438255/products.json`,
    },
    collections: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/smart_collections.json`,
        'products': (id: string) => `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/collections/${id}/products.json`
    }
}