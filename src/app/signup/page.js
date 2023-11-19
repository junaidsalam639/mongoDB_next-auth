'use client'
import BASED_URL from "@/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

const Signup = () => {
  const router = useRouter()
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const SignupUser = async () => {
    try {
      if (!user || !password || !email) {
        alert('Please Fill The Input');
      } else {
        const postData = {
          user: user,
          email: email,
          password: password,
        };

        const response = await axios.post(`${BASED_URL}/user`, postData);

        console.log('Response Status:', response.status);
        console.log('Response Data:', response.data);
        alert('User registered successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while registering the user.');
    }
  };

  return (
    <div className="h-screen w-72 mx-auto">
      <h1 className="text-3xl font-bold text-gray-400">Signup</h1>
      <input type="text" placeholder="username" className="outline-none px-2 my-2 py-2 border-2 border-gray-400 rounded-md" onChange={(e) => setUser(e.target.value)} value={user} /> <br />
      <input type="email" placeholder="email" className="outline-none px-2 my-2 py-2 border-2 border-gray-400 rounded-md" onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
      <input type="password" placeholder="password" className="outline-none px-2 my-2 py-2 border-2 border-gray-400 rounded-md" onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
      <button className="bg-gray-400 px-4 py-2 rounded-md text-white" onClick={SignupUser}>Signup</button>
    </div>
  )
}

export default Signup
