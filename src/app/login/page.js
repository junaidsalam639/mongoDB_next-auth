'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"

const Login = () => {
  const router = useRouter()
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const loginUser = async () => {
        const result = await signIn('credentials' , {
            email , password , redirect : false
          });
          if(result.ok){
            router.push('/')
          }
          else{
            alert('User Not Exists')
          }
        console.log('result----->' , result);
    }
    
  return (
    <div className="h-screen w-72 mx-auto">
      <h1 className="text-3xl font-bold text-gray-400">Login</h1>
      <input type="email" placeholder="email" className="outline-none px-2 my-2 py-2 border-2 border-gray-400 rounded-md" onChange={(e) => setEmail(e.target.value)} value={email}  /> <br/>
      <input type="password" placeholder="password" className="outline-none px-2 my-2 py-2 border-2 border-gray-400 rounded-md"  onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
      <button className="bg-gray-400 px-4 py-2 rounded-md text-white" onClick={loginUser}>Login</button>
    </div>
  )
}

export default Login
