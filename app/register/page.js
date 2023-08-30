// 'use client'
import { matchEmail } from "@/lib/mongo/products";
import { addUser } from "@/lib/mongo/products";
import bcrypt from 'bcrypt';

export default async function RegisterPage () {

  async function register (formData) {
    "use server"
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    //second param = salt (strength of the hash)
    const hashedPassword = await bcrypt.hash(password, 10);
    const check = await matchEmail(email);
    // console.log(check)
    if(check !== email) {
      await addUser({
        name: name, 
        email: email, 
        password: hashedPassword
      })
      console.log("User created");
      // alert("User created")
    }
    else if (check === email) {
      console.log('Email already exists.');
    }
    

    // console.log(matchEmail({ email: email}))
    // redirect('/comments');
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