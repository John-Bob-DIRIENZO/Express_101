import {checkSchema} from "express-validator";

/**
 * @param {object} schema
 * @return {import('express').RequestHandler<RouteParameters<Route>>}
 */
export function validate(schema) {
    return async (req, res, next) => {
        // Je lance la fonction "manuellement"
        let validations = await checkSchema(schema).run(req)
        let errors = []

        // Je récupère un résultat de la validation
        // de chaque champ
        validations.forEach(validation => {
            // Si rien n'est à signaler, je passe
            if (validation.isEmpty()) return
            // Sinon je l'ajoute à la liste des erreurs
            errors.push({error: validation.array()})
        })

        // Si je n'ai pas d'erreurs, je peux passer à la suite
        if (!errors.length) {
            return next()
        }

        // Sinon, je renvoie tout de suite une réponse
        return res.status(422).json(errors)
    }
}


