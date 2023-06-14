import { getComment } from "@/lib/mongo/products";
import { updateComment } from "@/lib/mongo/products";
import { deleteComment } from "@/lib/mongo/products";
import { redirect } from 'next/navigation';

// export const dynamic = 'force-dynamic'

export default async function CommentPage ({ params }) {
  const comment = await getComment(params.id);
  

  async function formSubmit (form) {
    "use server"
    const formData = Object.fromEntries(form);
    await updateComment(params.id, formData);
    redirect('/comments');
  }

  async function deleteButton () {
    "use server"
    await deleteComment(params.id);
    redirect('/comments');
  }

  return (
      <main>
        <form action={ formSubmit }>
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
        <form action={ deleteButton }>
         <button>Delete</button> 
        </form>
        <a href="/comments">Back to Comments</a>
      </main>
    )
}