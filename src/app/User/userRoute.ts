import {Request, Response} from 'express'
module.exports = function (app:any) {
    app.get('/', (req: Request, res: Response) => {
        res.send({"message" : "Hello"})
    })
}