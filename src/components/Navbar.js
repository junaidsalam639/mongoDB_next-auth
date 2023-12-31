'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  console.log('session----->', session);

  return (
    <div className="flex flex-row justify-between items-center w-full bg-indigo-600 px-4 py-6">
      <h1 className="text-2xl font-bold text-white">Navbar</h1>
      <Link href={'/blog'}>
      <button className=" text-white bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-500">Add Blog</button>
      </Link>
      <button  onClick={() => { session ? signOut() : signIn() }}
        className=" text-white bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-500">{session ? 'logout' : 'login'}</button>
    </div>
  )
}

export default Navbar
