export default async function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
    // console.log("Je pourrais encore faire des choses ici...")
}


