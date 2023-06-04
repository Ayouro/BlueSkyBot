const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Affiche la Latence du Bot !'),
    async execute(interaction) {

        //Définition de l'utilisateur
        const user = interaction.user;

        
        const examplepingEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('🏓 **Latence**')
	.setAuthor({ name: 'Help Center', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: '' })
	.setDescription('Ping')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setTimestamp()
	.setFooter({ text: user.username, iconURL: user.displayAvatarURL() });

        await interaction.reply({ embeds: [examplepingEmbed] });
    },
};

