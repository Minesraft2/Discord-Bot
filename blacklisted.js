module.exports = (interaction) => (require("./blacklist.json"))[interaction.user.id];