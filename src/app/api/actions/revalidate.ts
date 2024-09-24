"use server"

import { revalidateTag } from "next/cache"

export const revalidate = async (tag: string): Promise<{ revalidated: boolean }> => {
    revalidateTag(tag)

    console.log(`Server Action called.: revalidate`)
    return { revalidated: true }
}