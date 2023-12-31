import BASED_URL from "@/constant"

async function userFecth() {
    const res = await fetch(`${BASED_URL}/user`);
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  export default userFecth

