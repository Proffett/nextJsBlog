import {NextApiRequest, NextApiResponse} from "next";

interface MessageNextApiResponse extends NextApiResponse {
    yourId: string | number
}

interface MessageNextApiRequest extends NextApiRequest {
    query: {id: string}
}
export default function getById(req: MessageNextApiRequest, res: MessageNextApiResponse) {
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.end(req.query.id)
    res.json({yourId: req.query.id})
}