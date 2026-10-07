const internalAuth = (req, res, next) => {
    const secret = req.headers["x-internal-service-secret"]

    if (!secret || secret !== process.env.INTERNAL_SERVICE_SECRET) {
        return res.status(401).json({
            message: "Unauthorized internal service request"
        })
    }

    next()
}

export default internalAuth