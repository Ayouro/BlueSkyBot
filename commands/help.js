const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Affiche les differentes commandes du bot !'),
    async execute(interaction) {

        //Définition de l'utilisateur
        const user = interaction.user;

        
        const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Commande Disponible :')
	.setURL('https://discord.gg/fQVwpNWnd9')
	.setAuthor({ name: 'Commande Aide', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: '' })
	.setDescription('Retrouvez toutes nos différentes commandes disponibles pour notre serveur')
	.addFields(
		{ name: 'Utilitaires (N/A)', value: '**/ping**: Permet de voir la latence du bot !\n**/help**: Permet de voir toute les commandes du Bot !\ntest', inline: true },
		{ name: '\u200B', value: '\u200B' },

		{ name: 'Utilitaires (N/A)', value: '```/𝙝𝙚𝙡𝙥: Permet de voir la latence du bot !\n**/help**: Permet de voir toute les commandes du Bot !\ntest```', inline: true },
		{ name: 'Utilitaires (N/A)', value: '```**/ping**: Permet de voir la latence du bot !\n**/help**: Permet de voir toute les commandes du Bot !\ntest```', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Utilitaires (N/A)', value: '```**/ping**: Permet de voir la latence du bot !\n**/help**: Permet de voir toute les commandes du Bot !\ntest```', inline: true },
	)
	.setTimestamp()
	.setFooter({ text: user.username, iconURL: user.displayAvatarURL() });

        await interaction.reply({ embeds: [exampleEmbed] });

    },
};

