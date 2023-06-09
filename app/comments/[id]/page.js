import { getComment } from "@/lib/mongo/products";
import { updateComment } from "@/lib/mongo/products";
import { redirect } from 'next/navigation'

// export const dynamic = 'force-dynamic'

export default async function comment ({ params }) {
  const comment = await getComment(params.id);
  

  async function onSubmit (form) {
    "use server"
    const formData = Object.fromEntries(form);
    await updateComment(params.id, formData);
    redirect('/comments')
  }

  return (
      <main>
        <form action={onSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' placeholder={comment[0].name} defaultValue={comment[0].name}></input> 
          <br />
          <label htmlFor="location">Location:</label>
          <input type="text" name='location' placeholder={comment[0].location} defaultValue={comment[0].location}></input>
          <br />
          <label htmlFor='comment'>Comment:</label>
          <br />
          <textarea name='comment' placeholder={comment[0].comment} defaultValue={comment[0].comment}></textarea>
          <br />
          <button>Submit</button>   
        </form>
        <button>Delete</button>
      </main>
    )
}