const errorHandler = (error, req, res, next) => {
    // check for errors, if error code already assigned leave it, if not, add new code
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);

    // send stack in development, not in production
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
}

module.exports = errorHandler;