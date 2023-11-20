'use client'
import React , { useState , useEffect } from "react";
import axios from 'axios'; 
import BASED_URL from "@/constant";

const AddBlogPage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [userId, setUserId] = useState(''); 

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await fetchUserIdFunction();
      setUserId(id);
    };
    fetchUserId();
  }, []);

  const handlerBtn = async () => {
    try {
      if (!title || !desc) {
        alert('Title and Description are required.');
        return;
      }
      const postData = {
        title: title,
        desc: desc,
        userId: userId,
      };

      const response = await axios.post(`${BASED_URL}/blog`, postData);
      console.log('Response Status:', response.status);
      console.log('Response Data:', response.data);
      setTitle('');
      setDesc('');
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while adding the blog.');
    }
  };

  return (
    <div className="bg-indigo-600 w-full h-screen">
      <div className="w-full px-10 py-4">
        <h1 className="text-3xl font-bold text-indigo-400">Add Blog</h1>
      </div>
      <div>
        <div className="w-full px-10 mt-8">
          <input
            type="text"
            placeholder="Enter your title..."
            className="w-full mx-auto container border-2 border-indigo-400 px-5 py-2 rounded-sm"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="w-full px-10 mt-8">
          <input
            type="text"
            placeholder="Enter your description..."
            className="w-full mx-auto container border-2 border-indigo-400 px-5 py-2 h-32 rounded-sm"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <div className="w-full px-10 mt-8">
          <button onClick={handlerBtn} className="bg-indigo-400 px-4 py-2 text-white hover:bg-indigo-300">
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlogPage;
