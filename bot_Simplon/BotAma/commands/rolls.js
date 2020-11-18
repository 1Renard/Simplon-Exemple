const { MessageEmbed, Client } = require('discord.js');
const client = new Client();

function Rolls(min,max){
	return min+Math.floor(Math.random()*(max-min+1));
}

module.exports = {
	name: 'rolls',
	description: 'Donne un nombre aléatoire',
	execute(message, args) {
			const text = args.join(' ').split('-');
			const number1 = Number(text[0]);
			const number2 = Number(text[1]);
			const embed = new MessageEmbed()
				.setColor(0x660066)
				.setDescription(`Votre nombre est : ${Rolls(number1, number2)}`);
			message.delete(message.author)
			message.channel.send(embed)
	},
};