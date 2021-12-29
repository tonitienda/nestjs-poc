import * as express from "express";

import { CatsController } from './cats'

const app = express()
app.use(express.json())

app.use(CatsController.route, CatsController.handlers)

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Hello")
})

app.listen(3001, () => console.log('Listening to 3001'))