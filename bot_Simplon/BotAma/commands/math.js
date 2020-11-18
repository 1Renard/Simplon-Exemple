const { MessageEmbed, Client } = require('discord.js');
const client = new Client();

module.exports = {
	name: 'math',
	description: 'fait le calcul voulu.',
	execute(message, args) {
		const text = args.join(" ").split(" ");
		const number1 = Number(text[0]);
		const number2 = Number(text[2]);
		
		if (text[1] === "+") {
			const embed = new MessageEmbed()
				.setColor(0x660066)
				.setDescription(number1 + number2);
			message.channel.send(embed)
			}
		else if (text[1] === "-") {
			const embed = new MessageEmbed()
				.setColor(0x660066)
				.setDescription(number1 - number2);
			message.channel.send(embed)
			}
		else if (text[1] === "×") {
			const embed = new MessageEmbed()
				.setColor(0x660066)
				.setDescription(number1 * number2);
			message.channel.send(embed)
			}
		else if (text[1] === "÷") {
			const embed = new MessageEmbed()
				.setColor(0x660066)
				.setDescription(number1 / number2);
			message.channel.send(embed)
			}
		else {
			return;
			}
	},
};