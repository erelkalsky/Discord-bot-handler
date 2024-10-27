const mongoose = require("mongoose");
const example = require('../../settings/schemas/example');

module.exports = {
    name: 'ready',
    once: true,
    run: async(client) => {
        console.log(`✅ Connected to ${client.user.tag}`);
        try {
            mongoose.set('strictQuery', false)
            mongoose.connect(process.env.BOT_MONGODB + client.config.bot.guildId).then(() => console.log('✅ Connected to mongodb'));
        } catch(error) {};

        require('../../settings/handler/utils/slashCommands')(client);


        //const user = await client.users.fetch('842672793417678849');
        //console.log(user);
    }
}