require('dotenv').config()
import './Config/Database/Dbconnection'
import express, { Request, Response } from 'express'
const app = express()

require('./Config/express')(app)

app.get('/', (req: Request, res: Response) => res.json('node ts'))

require('./Config/routes')(app)

const PORT = process.env.PORT || 6060
app.listen(PORT, () => {
     console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
