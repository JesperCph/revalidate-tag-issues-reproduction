"use server"

import { headers } from "next/headers";
import Link from "next/link";
import RevalidateTag from "./RevalidateTag";

export default async function Home() {

  const headersList = headers()
  const host = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto')
  const endpoint = `${protocol}://${host}/api/time`
  
  const request = await fetch(endpoint, { next: { revalidate: 60, tags: ['time'] }}) 
  const data = await request.json()
  
  console.log('Page called .........: / (home)')
  return (
    <>
      

      <div className="flex flex-col items-center justify-center h-screen"> 
      
              <h2 className="text-2xl font-bold">Home (Time)</h2>
              <h1 className="text-4xl font-bold">{JSON.stringify(data.time)}</h1>

              <div className="flex flex-row gap-4">
                  <Link prefetch={false} href="/revalidate?tag=time" className="underline">Revalidate (Page)</Link>
                  <RevalidateTag tag="time" />
              </div>
      </div>
    </>
  );
}
 