'use client'

import { signIn, useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage () {

  const session = useSession();
  const router = useRouter();

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  useEffect (() => {
    if(session?.status === 'authenticated') {
      router.push('/dashboard')
    }
  })
  
  const login = async (e) => {
    e.preventDefault();
    signIn('credentials', {...data, redirect: false})
    // .then(()=> alert('User logged in'))
    // .then(console.log('User logged in'))
  }
  
  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' value={data.email} onChange={e => setData({...data, email: e.target.value})}></input>
        <br />
        <label htmlFor='password'>Password:</label>
        <input type="text" name='password' value={data.password} onChange={e => setData({...data, password: e.target.value})}></input>
        <br />
        <button>Sign In</button>   
      </form>
      <h1>Sign In to Google</h1>
      <button onClick={()=> signIn('google')}>Sign In</button>
    </main>
  )
}