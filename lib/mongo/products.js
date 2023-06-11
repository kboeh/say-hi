import clientPromise from "./client";
import { ObjectId } from "mongodb"
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
            // .map(user => ({...user, _id: user._id.toString() }))
            .toArray()
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

//fetch individual comment by id
export async function getComment(id) {
    try {
        if(!comments) await init()
        return await comments
            .find({_id: new ObjectId(id)})
            .toArray()
    } catch (error) {
        return {error: 'Failed to get comment!'}
    }
}

//update comment by id
export async function updateComment(id, data) {
    try {
        if(!comments) await init()
        return await comments
        .updateOne( { _id: new ObjectId(id, data) },
        {
          $set: {
            name: data.name,
            location: data.location,
            comment: data.comment
          }
        })
    } catch (error) {
        return {error: 'Failed to update comment!'}
    }
}

//delete comment
export async function deleteComment(id) {
    try {
        if(!comments) await init()
        return await comments
        .deleteOne( { _id: new ObjectId(id) })
    } catch (error) {
        return {error: 'Failed to delete comment!'}
    }
}