// 'use cli ent'
import { getComment } from "@/lib/mongo/products";
import { updateComment } from "@/lib/mongo/products";
// import { useRouter } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function comment ({ params }) {
  // const router = useRouter()
  const comment = await getComment(params.id);
  // console.log(comment);

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

  return (
      <main>
        <h1 className="	text-decoration-line: underline">{ comment[0].name }</h1>
        <p>{comment[0].comment}</p>
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
      </main>
    )
}