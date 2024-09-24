export const dynamic = 'force-dynamic'
 
export async function GET() {

    const data = ( { time : new Date().toISOString()})
    console.log(data)
 
    return Response.json({ data })
}