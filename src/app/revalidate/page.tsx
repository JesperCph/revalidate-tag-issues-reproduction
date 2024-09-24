"use server"

import { revalidateTag } from "next/cache"

const RevalPage = async () => {

    revalidateTag('time')
    return <div>Taghas been revalidated</div>
}

export default RevalPage