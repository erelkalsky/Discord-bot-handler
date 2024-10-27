module.exports = (client) => {
    ["events", "antiCrash", "commands"].forEach((handler) => {
        require(`./utils/${handler}`)(client);
    });
}