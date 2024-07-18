import { env } from "../../config/env"

export const shopifyUrls = {
    products: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json`
    },
    collections: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/smart_collections.json`
    }
}