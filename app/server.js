import express from 'express'
import apiRouter from "./routes/api/index.js";
import webRouter from "./routes/web/index.js";
import logger from "./app/middleware/logger.js";

const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(logger)

app.use('/assets', express.static('./public'))
app.use('/', webRouter)
app.use('/api', apiRouter)

app.use(async (req, res) => {
    res.status(404).json({
        message: `No route found for ${req.originalUrl}`
    })
})

app.listen(port, '127.0.0.1', 511, () => {
    console.log(`Yeah, my app is now running on port ${port}`)
})



