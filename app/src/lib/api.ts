export async function mockServer<T>(endpoint : string , userId : string) : Promise<T> {
   const res = await fetch(`https://mock-backend-hintro.vercel.app/api/${endpoint}`,{
    headers : {
        'x-user-id' : userId
    }
   });
   
   if(!res.ok) throw new Error("Failed to fetch");
   return res.json();
}