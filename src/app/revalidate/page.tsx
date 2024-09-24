"use server"

import Link from "next/link"
import { revalidateTag } from "next/cache"

const RevalPage = async ( {searchParams}: {searchParams: {tag: string}}) => {

    const { tag } = searchParams
    revalidateTag(tag)
    console.log('Page called .........: /revalidate')

    return (
        <div className="flex flex-col items-center justify-center h-screen"> 
            <pre>Tag [{tag}] has been revalidated</pre>
            <Link href="/"  className="underline">home</Link>
        </div>
    )


}

export default RevalPage