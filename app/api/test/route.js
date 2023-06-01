import clientPromise from "../../../lib/mongo/client";
import Product from "../../../models/productModel"

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await clientPromise;
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const test = await Product.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}