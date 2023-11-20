import Navbar from "@/components/Navbar";
import blogFecth from "@/lib/blogFecth";
import Link from "next/link";


export default async function Home() {
  const blog = await blogFecth();
  
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <div>
          {
            blog.data.map((data , index) => {
              console.log('Id', data._id);
              return (
                <Link href={`/${data._id}`}>
                <div className="bg-indigo-700 m-5 p-4 rounded-md" key={index}>
                  <h2 className="text-white">title : {data.title}</h2>
                  <h2 className="text-white">description : {data.description}</h2>
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
