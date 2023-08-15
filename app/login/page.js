'use client'
// import { matchEmail } from "@/lib/mongo/products";
// import { addUser } from "@/lib/mongo/products";
import { signIn } from "next-auth/react"
import { useState } from "react"
// import axios from "axios";

export default function LoginPage () {

  // async function login (formData) {
  //   "use server"
  //   const email = formData.get('email');
  //   const password = formData.get('password');
  //   const check = await matchEmail(email);
  //   console.log(check)
  //   if(check.email !== email) {
  //     console.log("incorrect email"); 
  //   }
  //   if(check.password !== password) {
  //     console.log('incorrect password');
  //   }
  //   else {
  //     console.log("signed in");
  //   }
    
  //   // signIn('credentials', {...data, redirect: false})
  // }; 

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  // console.log(data)
  

  const login = async (e) => {
    e.preventDefault();
    signIn('credentials', {...data, redirect: false})
    // .then(()=> alert('User logged in'))
    // .then(console.log('User logged in'))
  }
  
  // return (
  //   <main>
  //     <h1>Login</h1>
  //     <form action={login}>
  //       {/* <label htmlFor="name">Name:</label>
  //       <input type="text" name='name'></input> 
  //       <br /> */}
  //       <label htmlFor="email">Email:</label>
  //       <input type="text" name='email'></input>
  //       <br />
  //       <label htmlFor='password'>Password:</label>
  //       <input type="text" name='password'></input>
  //       <br />
  //       <button>Submit</button>   
  //     </form>
  //   </main>
  // )
  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="email">Email:</label>
        {/* <input type="text" name='email'></input> */}
        <input type="text" name='email' value={data.email} onChange={e => setData({...data, email: e.target.value})}></input>
        <br />
        <label htmlFor='password'>Password:</label>
        {/* <input type="text" name='password'></input> */}
        <input type="text" name='password' value={data.password} onChange={e => setData({...data, password: e.target.value})}></input>
        <br />
        <button>Sign In</button>   
      </form>
      <h1>Sign In to Google</h1>
      <button onClick={()=> signIn('google')}>Sign In</button>
    </main>
  )
}