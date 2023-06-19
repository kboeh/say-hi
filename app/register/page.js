export default async function RegisterPage () {

  async function register (formData) {
    "use server"
    const name = formData.get('name');
    const location = formData.get('location');
    const comment = formData.get('comment');
    await addComment({
      name: name, 
      location: location, 
      comment: comment
    })
    redirect('/comments');
  }; 
  
  return (
    <main>
      <h1>Register</h1>
      <form action={register}>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name'></input> 
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name='email'></input>
        <br />
        <label htmlFor='password'>Password:</label>
        <input type="text" name='password'></input>
        <br />
        <button>Submit</button>   
      </form>
    </main>
  )
}