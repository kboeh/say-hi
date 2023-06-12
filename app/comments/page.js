import { getComments } from "@/lib/mongo/products";

// export const dynamic = 'force-dynamic'

const Page = async () => {
    const { comments } = await getComments();

    return (
        <main>
            <h1 className="	text-decoration-line: underline">Products</h1>
            <ul>
                {comments?.map(product => (
                    <li key={product._id}>{product.name}<a href={`/comments/${product._id}`}>edit</a></li>
                ))}
            </ul>
        </main>
    )
}

export default Page;