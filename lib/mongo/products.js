import clientPromise from "./client";
// import Product from "../../models/productModel"

let client
let db
let comments

async function init() {
    if(db) return
    try {
        client = await clientPromise
        db = await client.db()
        comments = await db.collection('comments')
    } catch (error) {
        throw new Error('Failed to connect to DB')
    }
}

;(async () => {
    await init()
})()

//gets all comments
export async function getComments() {
    try {
        if(!comments) await init()
        const result = await comments
            .find({})
            .map(user => ({...user, _id: user._id.toString() }))
            .toArray()
        // console.log(result)
        return { comments: result }
    } catch (error) {
        return {error: 'Failed to fetch!'}
    }
}

//create comment
export async function addComment(comment) {
    try {
        if(!comments) await init()
        return await comments.insertOne( comment )
    } catch (error) {
        return {error: 'Failed to create comment!'}
    }
}