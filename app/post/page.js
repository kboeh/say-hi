import { addComment } from "@/lib/mongo/products"

// export const dynamic = 'force-dynamic'

export default function newComment () {
  async function createComment (formData) {
    "use server"
    const name = formData.get('name')
    // console.log(name)
    const location = formData.get('location')
    // console.log(location)
    const comment = formData.get('comment')
    // console.log(comment)
    await addComment({
      name: name, 
      location: location, 
      comment: comment
    })
  }

  return (
      <main>
        <h1 className="	text-decoration-line: underline">Comment</h1>
        <form action={createComment}>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' placeholder='your name'></input> 
          <br />
          <label htmlFor="location">Location:</label>
          <input type="text" name='location' placeholder='your local'></input>
          <br />
          <label htmlFor='comment'>Comment:</label>
          <br />
          <textarea name='comment' placeholder='say what?'></textarea>
          <br />
          <button>Submit</button>   
        </form>
      </main>
    )
}
// export default function newComment () {

//   return (
//       <main>
//         <h1 className="	text-decoration-line: underline">Comment</h1>
//         <form action="http://localhost:5000/comments" method='post'>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name='name' placeholder='your name'></input> 
//           <br />
//           <label htmlFor="location">Location:</label>
//           <input type="text" name='location' placeholder='your local'></input>
//           <br />
//           <label htmlFor='comment'>Comment:</label>
//           <br />
//           <textarea name='comment' placeholder='say what?'></textarea>
//           <br />
//           <button>Submit</button>   
//         </form>
//       </main>
//     )
// }