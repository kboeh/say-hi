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
            //turn id's into strings so no errors are thrown
            .map(user => ({...user, _id: user._id.toString() }))
            .toArray()
        // console.log(result)
        return { comments: result }
    } catch (error) {
        return {error: 'Failed to get all comments!'}
    }
}

//create comment
export async function addComment(comment) {
    try {
        if(!comments) await init()
        return await comments.insertOne(comment)
    } catch (error) {
        return {error: 'Failed to create comment!'}
    }
}

//fetch individual comment by  id
export async function getComment() {
    try {
        if(!comments) await init()
        const result = await comments
            .findById(id)
            //turn id's into strings so no errors are thrown
            // .map(user => ({...user, _id: user._id.toString() }))
            // .toArray()
        // console.log(result)
        return { comments: result }
    } catch (error) {
        return {error: 'Failed to get comment!'}
    }
}

//update an id
// app.put ('/products/:id', async (req, res) => {
//     const {id} = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true});
//     console.log(req.body);
//     res.json('PUT!')
// })

// export async function updateComment() {
//     try {
//         if(!comments) await init()
//         return await comments.findByIdAndUpdate(id, req.body, { runValidators: true, new: true})
//     } catch (error) {
//         return {error: 'Failed to update comment!'}
//     }
// }