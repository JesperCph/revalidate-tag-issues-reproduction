"use client"

import { revalidate } from "./api/actions/revalidate"

export default function RevalidateTag({tag}: {tag: string}) {


    const handleRevalidate = async () => {
        await revalidate(tag)
    }

    return (
        <form action={handleRevalidate}>
        
                <button type="submit" className="underline">Revalidate (Form Action)</button>
          
        </form>
    )
}