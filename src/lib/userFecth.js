import BASED_URL from "@/constant"

async function getBlog() {
    const res = await fetch(`${BASED_URL}/user`);
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  export default getBlog

