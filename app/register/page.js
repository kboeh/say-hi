// 'use client'
import { matchEmail } from "@/lib/mongo/products";
import { addUser } from "@/lib/mongo/products";
// import axios from "axios";

export default async function RegisterPage () {

  async function register (formData) {
    "use server"
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const check = await matchEmail(email);
    // console.log(check)
    if(check !== email) {
      await addUser({
        name: name, 
        email: email, 
        password: password
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

  // const registerUser = async (e) => {
  //   e.preventDefault();
  //   axios.post('/api/register', data)
  // }
  
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