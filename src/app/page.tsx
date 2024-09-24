"use server"

export default async function Home() {

  const request = await fetch('http://localhost:3002/api/time', { next: { revalidate: 604800, tags: ['time'] }}) 
  const time = await request.json()

  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
           <h1 className="text-4xl font-bold">Time Object </h1>
           <pre>{JSON.stringify(time,null,2)}</pre>
    </div>
  );
}
 