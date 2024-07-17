import { ProductsWrapper } from "../../../components/Store/ProductsWrapper"
import { getProducts } from "../../../services/shopify"

interface CategoryProps {
    params: {
        categories: string[],
    }
    searchParams?: string
}

export default async function Category(props: CategoryProps) {
    const products = await getProducts()
    const { categories } = props.params
    // throw new Error('Error: boom')
    return (
        <ProductsWrapper products={products} />
    )
}