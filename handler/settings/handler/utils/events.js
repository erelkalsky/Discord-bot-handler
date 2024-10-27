const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

module.exports = async (client) => {
    const eventFiles = await globPromise(`${process.cwd().replace(/\\/g, "/")}/events/**/*.js`);
    eventFiles.forEach((file) => delete require.cache[require.resolve(file)]);

    client.events.clear();
    eventFiles.forEach((file) => {
        const event = require(file);
        client.events.set(event.name, (...args) => event.run(client, ...args));

        if(event.once) {
            client.once(event.name, (...args) => event.run(client, ...args));
        } else {
            client.on(event.name, (...args) => event.run(client, ...args));
        }
    });
}