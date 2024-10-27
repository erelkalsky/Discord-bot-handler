module.exports = async (client) => {
    process.on("unhandledRejection", (reason , p) => {
        console.log(reason);
    });

    process.on("uncaughtException", (err , origin) => {
        console.log(err);
    });

    process.on("uncaughtExceptionMonitor", (err , p) => {
        console.log(err);
    });

    /*
    process.on("multipleResolves", (type, promise, reason) => {
        console.log(reason);
    })
    */
}