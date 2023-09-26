import express from 'express'
import {getApiRouter} from "./routes/api/index.js";
import webRouter from "./routes/web/index.js";
import logger from "./app/middleware/logger.js";
import {Todos} from "./data/mock_data.js";
import {Store} from "./store/Store.js";

const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(logger)

// Je crée mon store qui sera la couche d'abstraction me permettant
// de manipuler mes données en database, c'est l'équivalent du
// repository dans le monde Symfony
const store = new Store(Todos)

app.use('/assets', express.static('./public'))
app.use('/', webRouter)
app.use('/api', getApiRouter(express, store)) // Je passe ici mon store

app.use(async (req, res) => {
    res.status(404).json({
        message: `No route found for ${req.originalUrl}`
    })
})

app.listen(port, '127.0.0.1', 511, () => {
    console.log(`Yeah, my app is now running on port ${port}`)
})



