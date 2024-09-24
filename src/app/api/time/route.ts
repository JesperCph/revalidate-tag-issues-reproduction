import { NextRequest } from "next/server"

export const dynamic = 'force-dynamic'
 
export async function GET(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const data = ( { time : new Date().toISOString()}) 

    console.log(`API endpoint called .: ${pathname}`)
                 
    return Response.json(data)
}