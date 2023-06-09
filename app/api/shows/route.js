import { getComments } from "../../../lib/mongo/products";
import { NextResponse } from "next/server";
// import Product from "../../../models/productModel"

export async function GET (request) {
  const comment = await getComments();
  // console.log(request.body);
  return NextResponse.json(comment);
}

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
// export default async function addTest(req, res) {
//   try {
//     console.log('CONNECTING TO MONGO');
//     await clientPromise;
//     console.log('CONNECTED TO MONGO');

//     console.log('CREATING DOCUMENT');
//     const test = await Product.create(req.body);
//     console.log('CREATED DOCUMENT');

//     res.json({ test });
//   } catch (error) {
//     console.log(error);
//     res.json({ error });
//   }
// }