import express from "express";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @return {Promise<void>}
 */
export default async function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
    // console.log("Je pourrais encore faire des choses ici...")
}


