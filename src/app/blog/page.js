const page = () => {
  return (
    <div className="bg-indigo-600 w-full h-screen">
        <div className="w-full px-10 py-4">
       <h1 className="text-3xl font-bold text-indigo-400">Add Blog</h1>    
        </div>
       <div>
          <div className="w-full px-10 mt-8">
            <input type="text" placeholder="enter your title..." className="w-full mx-auto container border-2 border-indigo-400 px-5 py-2 rounded-sm" />
          </div>
          <div className="w-full px-10 mt-8">
            <input type="text" placeholder="enter your Description..." className="w-full mx-auto container border-2 border-indigo-400 px-5 py-2 h-32 rounded-sm" />
          </div>
          <div className="w-full px-10 mt-8">
            <button className="bg-indigo-400 px-4 py-2 text-white hover:bg-indigo-300">Add Blog</button>
          </div>
        </div>  
    </div>
  )
}

export default page
