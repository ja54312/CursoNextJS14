import { getMainProducts } from '../../../services/shopify/products'
import Image from 'next/image'
import styles from './MainProducts.module.sass'

export const MainProducts = async () => {
    const products = await getMainProducts()
    //console.log(0, products)
    return (
        <section className={styles.MainProducts}>
            <h3>✨ New products released!</h3>
            <div className={styles.MainProducts__grid}>
                {products && products?.map((product: any) => {
                    const imageSrc = product?.image;
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image src={imageSrc} fill alt={product.title} loading="eager" />
                        </article>
                    )
                })}
            </div>
        </section>
    )
}