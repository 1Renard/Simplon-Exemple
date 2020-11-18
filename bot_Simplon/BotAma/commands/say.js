const { MessageEmbed, Client } = require('discord.js');
const client = new Client();

module.exports = {
	name: 'say',
	description: 'renvoie le message dans un embed.',
	execute(message, args) {
		const text = args.join(' ').split("image : ");
		const embed = new MessageEmbed()
			.setColor(0x660066)
			.setDescription(`${text[0]}`)
			.setImage(text[1]);
		message.channel.send(embed);
		message.delete(message.author);
	},
};