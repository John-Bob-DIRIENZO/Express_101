import express from "express";

const apiUserRouter = express.Router()

// Dès qu'un paramètre "id" sera passé en URL dans mon apiUserRouter
// ce middleware sera déclenché. Il reçoit en 4ᵉ paramètre le paramètre
apiUserRouter.param('id', (req, res, next, id) => {
    console.log(id)
    // Je peux imaginer modifier l'objet de requête pour y passer
    // un élément récupéré en base de données par exemple
    req.user = id
    next()
})

apiUserRouter
    .route('/')
    .get((req, res) => {
        res.json({
            message: "Get all users"
        })
    })
    .post((req, res) => {
        res.json({
            message: "Add new user"
        })
    })

apiUserRouter
    .route('/:id(\\d+)')
    .get((req, res) => {
        res.json({
            message: `Get user #${req.params.id}`
        })
    })
    .patch((req, res) => {
        res.json({
            message: `Update user #${req.params.id}`
        })
    })
    .delete((req, res) => {
        res.json({
            message: `Delete user #${req.params.id}`
        })
    })


export default apiUserRouter;


