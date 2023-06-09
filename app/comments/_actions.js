import getComments from "../../../lib/mongo/products";
// import { NextResponse } from "next/server";
// import Product from "../../../models/productModel"

export async function GET (req, res) {
  // "use server"
  console.log(req)
  const comment = await getComments
  console.log(res)
  // const getComment = async (getComment) {
  //   "use server"
  //   return await getComment
  // }
  console.log(comment)
  return NextResponse.json(comment);

}

async function onSubmit (form) {
    "use server"
    // e.preventDefault();
    // const formData = form.entries();
    // const formData = new formData(form);
    const formData = Object.fromEntries(form);
    await updateComment(params.id, formData);
    // redirect(`/comments/${params.id}`)
    router.refresh()
  }