const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages, MessageContent, DirectMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const client = new Client({ 
    intents: [Guilds, GuildMembers, GuildMessages, MessageContent, DirectMessages],
    partials: [User, Message, GuildMember, ThreadMember, Channel]
});

client.events = new Collection();
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require('./config.json');

require('./settings/handler/index')(client);
require('dotenv').config();

client.login(process.env.BOT_TOKEN);