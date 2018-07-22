export default function(queryStringObject: {}, method: string, headers: any) : {
    statusCode: number,
    payload: any,
    headers: any
} {
    const response = {
        statusCode: 404,
        payload: JSON.stringify("Not Found!"),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    return response
}
