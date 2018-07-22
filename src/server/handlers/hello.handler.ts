export default function(queryStringObject: {}, method: string, headers: any) : {
    statusCode: number,
    payload: any,
    headers: any
} {
    const statusCode = method === "get" ? 200 : 405

    const payload = statusCode === 200 ? {
        "I know you want something more! I got your query string params: " : queryStringObject,
        "BUT you get only..." : "A HELLOOOO !!!"
    } : null

    const response = {
        statusCode: statusCode,
        payload: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    return response
}
