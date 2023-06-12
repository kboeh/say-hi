import { addComment } from "@/lib/mongo/products";
import { redirect } from 'next/navigation'

// export const dynamic = 'force-dynamic'

export default function newComment () {
  async function createComment (formData) {
    "use server"
    const name = formData.get('name');
    const location = formData.get('location');
    const comment = formData.get('comment');
    await addComment({
      name: name, 
      location: location, 
      comment: comment
    })
    redirect('/comments')
  };

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