import Navbar from "@/components/Navbar";
import getBlog from "@/lib/userFecth"
import Link from "next/link";


export default async function Home() {
  const blog = await getBlog();
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <div>
          {
            blog?.data?.map((data , index) => {
              console.log('Id', data._id);
              return (
                <Link href={`/${data._id}`}>
                <div className="bg-indigo-700 m-5 p-4 rounded-md" key={index}>
                  <h2 className="text-white">Name : {data.username}</h2>
                  <h2 className="text-white">Email : {data.email}</h2>
                  <h2 className="text-white">Password : {data.password}</h2>
                </div>
                </Link>
              )
            })
          }
        </div>
      </main>
    </>
  )
}
