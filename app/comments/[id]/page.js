// import { addComment } from "@/lib/mongo/products";

// export const dynamic = 'force-dynamic'

export default function comment ({ params }) {
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
        <h1 className="	text-decoration-line: underline">{ params.id}</h1>
      </main>
    )
}