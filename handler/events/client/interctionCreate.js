module.exports = {
    name: 'interactionCreate',
    run: async(client, interaction) => {
        if(interaction.isChatInputCommand()) {
            const slashCommand = client.slashCommands.get(interaction.commandName);
            if(!slashCommand) return interaction.reply({ content: "This command doesnot exist.", ephemeral: true });
    
            interaction.member = interaction.guild.members.cache.get(interaction.user.id);
            await slashCommand.run(client, interaction);
        }
    }
}