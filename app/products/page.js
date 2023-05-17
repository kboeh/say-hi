import { getProducts } from "@/lib/mongo/products";

export const dynamic = 'force-dynamic'

const Page = async () => {
    const { products } = await getProducts();

    return (
        <main>
            <h1 className="	text-decoration-line: underline">Products</h1>
            <ul>
                {products?.map(product => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </main>
    )
}

export default Page;