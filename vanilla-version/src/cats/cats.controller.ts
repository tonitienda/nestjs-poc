import { Router, Request, Response } from 'express'
import * as CatService from './cats.service'
import { CreateCatDto } from './types'

export const route = '/cats'
export const handlers = Router()

handlers.get('/', (req: Request, res: Response) => {

    res.json(CatService.findAll())
})


handlers.post('/', (req: Request, res: Response) => {

    // TODO - Add validation
    res.json(CatService.create(req.body as CreateCatDto))
})

