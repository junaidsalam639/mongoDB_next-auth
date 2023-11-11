import Navbar from "@/components/Navbar";
import getBlog from "@/lib/blogFecth"


export default async function Home() {
  const blog = await getBlog();
  console.log(blog);
  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center justify-between p-24">
          <div>
            <h2>{blog.message}</h2>
          </div>
    </main>
    </>
  )
}
