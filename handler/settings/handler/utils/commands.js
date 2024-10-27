const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

module.exports = async (client) => {
    const commandFiles = await globPromise(`${process.cwd().replace(/\\/g, "/")}/commands/**/*.js`);
    commandFiles.forEach((file) => delete require.cache[require.resolve(file)]);

    client.commands.clear();
    commandFiles.forEach((file) => {
        const command = require(file);
        client.commands.set(command.name, command);
    });
}