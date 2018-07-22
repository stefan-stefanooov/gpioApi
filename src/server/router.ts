import * as handlers from "./handlers/index"

class Router {
    private routes: any

    constructor(routes: Object) {
        this.routes = routes
    }

    public route(path: string) {
        return typeof this.routes[path] === "function" ? this.routes[path] : this.routes["default"] 
    }
}

const routes = {
    "default" : handlers.defaultHandler,
    "hello" : handlers.helloHandler
}

const router = new Router(routes)

export default router
