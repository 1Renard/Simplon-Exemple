const discord = require('discord.js');
const client = new discord.Client();

module.exports = {
	name: 'sugg',
	description: 'renvoie un message embed avec des réactions.',
	execute(message, args) {
		const user = message.author;
		message.delete(message.author);
		const text = args.join(" ");
		const embed = new discord.MessageEmbed()
			.setColor(0x660066)
			.setDescription(`${text}\n\n<:Amatoui:734866883844505630> : Pour\n<:Amatnon:734866920297463849> : Contre`)
			.setThumbnail(user.avatarURL({ dynamic: true }))
			.setFooter("A/sugg pour faire une suggestion");
		message.channel.send({embed: embed}).then(embedMessage => {
    			embedMessage.react("734866883844505630")
    			embedMessage.react("734866920297463849");
		});
	},
};