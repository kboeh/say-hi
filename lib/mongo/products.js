import clientPromise from "./client";

let client
let db
let products

async function init() {
    if(db) return
    try {
        client = await clientPromise
        db = await client.db()
        products = await db.collection('products')
    } catch (error) {
        throw new Error('Failed to connect to DB')
    }
}

;(async () => {
    await init()
})()

//gets all products
export async function getProducts() {
    try {
        if(!products) await init()
        const result = await products
            .find({})
            .map(user => ({...user, _id: user._id.toString() }))
            .toArray()
        // console.log(result)
        return { products: result }
    } catch (error) {
        return {error: 'Failed to fetch!'}
    }
}