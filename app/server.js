import express from 'express'
import apiRouter from "./routes/api/index.js";
import webRouter from "./routes/web/index.js";
import logger from "./app/middleware/logger.js";

const app = express()
const port = 3001

// J'attache mon middleware à l'intégralité
// de mon application
app.use(logger)

app.use('/assets', express.static('./public'))
app.use('/', webRouter)
app.use('/api', apiRouter)

app.listen(port, '127.0.0.1', 511, () => {
    console.log(`Yeah, my app is now running on port ${port}`)
})



