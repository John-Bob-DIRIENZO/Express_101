import express from "express";

const apiUserRouter = express.Router()

apiUserRouter
    .route('/')
    // je n'ai qu'à rajouter async devant mes
    // handlers pour les rendre asynchrones
    .get(async (req, res) => {
        res.json({
            message: "Get all users"
        })
    })
    .post(async (req, res) => {
        res.json({
            message: req.body
        })
    })

apiUserRouter
    .route('/:id(\\d+)')
    .get(async (req, res) => {
        res.json({
            message: `Get user #${req.params.id}`
        })
    })
    .patch(async (req, res) => {
        res.json({
            message: `Update user #${req.params.id}`
        })
    })
    .delete(async (req, res) => {
        res.json({
            message: `Delete user #${req.params.id}`
        })
    })

apiUserRouter.param('id', async (req, res, next, id) => {
    console.log(id)
    next()
})

export default apiUserRouter;


