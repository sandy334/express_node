const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; // Set default status code to 500 if not set
    switch (statusCode) {
        case 400:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stack: err.stack,
            });
            break;
        case 404:
            res.json({
                title: "Not Found",
                message: err.message,
                stack: err.stack,
            });
            default:
            break;
       
    }
module.exports = errorHandler;