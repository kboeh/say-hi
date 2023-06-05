import { MongoClient } from 'mongodb'

const URI = process.env.MONGODB_URI
const options = {}

if (!URI) throw new Error('Please add your Mongo URI to .env.local')

let client = new MongoClient(URI, options)
let clientPromise

if (process.env.NODE_ENV !== 'production') {
    //establish global connection
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect()
}

export default clientPromise



// import mongoose from "mongoose";

// export const clientPromise = async () => {
//     if(mongoose.connect.readyState === 1) {
//         return mongoose.connect.asPromise();
//     }

//     return await mongoose.connect(process.env.MONGODB_URI)
// }