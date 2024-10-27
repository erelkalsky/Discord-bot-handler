const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

module.exports = async (client) => {
    const slashCommandFiles = await globPromise(`${process.cwd().replace(/\\/g, "/")}/slashCommands/**/*.js`);
    slashCommandFiles.forEach((file) => delete require.cache[require.resolve(file)]);

    const arrayOfSlashCommands = [];

    client.slashCommands.clear();
    slashCommandFiles.forEach((file) => {
        const slashCommand = require(file);
        client.slashCommands.set(slashCommand.name, slashCommand);

        arrayOfSlashCommands.push(slashCommand);
    });

    //client.application.slashCommands.set([])
    //client.application.commands.set(arrayOfSlashCommands);
    
    client.guilds.cache.get(client.config.bot.guildId).commands.set(arrayOfSlashCommands);

    /*
    client.on('ready', () => {
        client.guilds.cache.forEach(guild => {
            guild.commands.set([]).then(() => {
                guild.commands.set(arrayOfSlashCommands);
            });
        });
    });

    client.on('guildCreate', async(guild) => {
        await guild.commands.set(arrayOfSlashCommands);
    });
    */
}