module.exports = {
    name: 'messageCreate',
    run: async(client, message) => {

        if(message.author.bot || !message.guild) return;

        const prefix = client.config.bot.prefix;
        if(!message.content.toLowerCase().startsWith(prefix)) return;

        const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

        if(command) {
            await command.run(client, message, args);
        }
    }
}