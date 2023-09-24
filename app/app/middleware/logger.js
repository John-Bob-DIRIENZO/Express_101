export default function logger(req, res, next) {
    // Je peux faire des choses avant la fonction suivante
    // et manipuler les objets de requête et de réponse
    console.log(req.originalUrl)

    // Puis, je "passe la main" à la fonction suivante
    next()

    console.log("Je peux encore faire des choses ici...")
}


