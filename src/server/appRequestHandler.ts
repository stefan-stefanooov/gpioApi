import router from "./router"
class AppRequestHandler {
    private routes: Object

    constructor() {
    
    }

    public handle(trimmedPath: string, queryStringObject: {}, method: string, headers: any) : {
        statusCode: number,
        payload: any,
        headers: any
    } {
        const handler = router.route(trimmedPath)

        return handler(queryStringObject, method, headers)
        // console.log(`Path: "${trimmedPath}" called => response: ${handler()}`)
    }
}

const handler = new AppRequestHandler()

export default handler
