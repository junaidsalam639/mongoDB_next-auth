import BASED_URL from "@/constant";

const blogFecth = async() => {
  const res = await fetch(`${BASED_URL}/blog`);
  if(!res.ok){
    throw new Error ('Failed to fetch data')
  }
  return res.json();
}

export default blogFecth
