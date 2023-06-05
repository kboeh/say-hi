import { getComments } from "@/lib/mongo/products";

// export const dynamic = 'force-dynamic'

const Page = async () => {
    const { comments } = await getComments();
    
    // const {category} = req.query;
    
    // if(category) {
    //     const products = await Product.find({category});
    //     res.json(products);
    // } else {
    //     const products = await Product.find({});
    //     res.json(products);
    // }

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