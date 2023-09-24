import express from "express";

const webUserRouter = express.Router()

webUserRouter.get('/', async (req, res) => {
    res.render('index.twig', {
        firstName: "Francis",
        lastName: "Huster",
        age: 42,
        tags: ["genius", "coder"],
        meta: {
            surname: "Willy"
        }
    })
})

export default webUserRouter


