const typeKey = {
    "11": "Attachment",
    "5": "Boolean",
    "7": "Channel",
    "4": "Integer",
    "9": "Mentionable",
    "10": "Number",
    "8": "Role",
    "3": "String",
    "1": "Subcommand",
    "2": "SubcommandGroup",
    "6": "User",
}
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        console.log(interaction.options, interaction.options._hoistedOptions.map(option => {
            return [option.name, interaction.options[`get${typeKey[option.type]}`]?.(option.name) || option.value]
        }).reduce((a, b) => (a[b[0]] = b[1], a), {}))
        if (!interaction.isCommand() || require("../blacklisted.js")(interaction)) return;
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(client, interaction, Object.fromEntries(interaction.options._hoistedOptions.map(({ name, value }) => [name, value])));
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }

    },
};