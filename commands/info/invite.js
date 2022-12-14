const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Gets bot invite'),
    usage: "/invite",
    category: "info",
    async execute(client, interaction, args) {
        var url = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=1644971949559&scope=bot%20applications.commands`;
        await interaction.reply({ content: `[Bot Invite](${url})\n[Server Invite](<https://discord.gg/${process.env.SERVER_INV}> "Kingdom of Jod")`, ephemeral: true });
    },
};