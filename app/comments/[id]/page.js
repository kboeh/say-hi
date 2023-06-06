import { getComment } from "@/lib/mongo/products";

// export const dynamic = 'force-dynamic'

export default async function comment ({ params }) {

  const comment = await getComment(params.id);
  console.log(comment)
//   async function createComment (formData) {
//     "use server"
//     const name = formData.get('name');
//     const location = formData.get('location');
//     const comment = formData.get('comment');
//     await addComment({
//       name: name, 
//       location: location, 
//       comment: comment
//     })
//   };

  return (
      <main>
        <h1 className="	text-decoration-line: underline">{ comment[0].name }</h1>
      </main>
    )
}