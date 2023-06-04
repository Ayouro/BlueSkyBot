const { Client, Intents, MessageActionRow, MessageButton, EmbedBuilder } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientId, guildId } = require('./config.json');

const commands = [{
    name: 'ping',
    description: 'Affiche a la page daide',
}];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Mise à jour des commandes (/) globales...');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log(`Commandes $commands mises à jour avec succès!`);
    } catch (error) {
        console.error(error);
    }
})();


const client = new Client({ intents: [3243773] });

client.once('ready', () => {
    console.log('Prêt!');
});




client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const user = interaction.user;

    if (commandName === 'ping') {
        const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Help Center', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Retrouvez toutes nos catégories disponibles pour notre serveur')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: user.username, iconURL: user.displayAvatarURL() });

        await interaction.reply({ embeds: [exampleEmbed] });
    }
});



client.login(token);
