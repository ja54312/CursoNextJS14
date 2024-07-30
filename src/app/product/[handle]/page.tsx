
import { redirect } from "next/navigation"
import { ProductView } from "../../../components/product/ProductView"
import { getProducts } from "../../../services/shopify/products"


interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    if (!id) {
        redirect('/')
    }

    return <ProductView product={product} />
}
