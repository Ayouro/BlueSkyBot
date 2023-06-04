const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientId, guildId } = require('./config.json');

const client = new Client({ 
    intents: [3243773]
});

//FS
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
    console.log(`Commande chargée: ${command.data.name}`);
}

const commands = [];
client.commands.forEach(command => commands.push(command.data.toJSON()));

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Mise à jour des commandes (/) globales...');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

    } catch (error) {
        console.error(error);
    }
})();

client.once('ready', () => {
    console.log('Prêt être utilisé !');
});






client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Il y a eu une erreur lors de l\'exécution de cette commande!', ephemeral: true });
    }
});


client.login(token);



//3243773