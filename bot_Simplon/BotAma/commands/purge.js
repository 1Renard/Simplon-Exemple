const { MessageEmbed, Client } = require('discord.js');
const img = require('./Limg.json');
const client = new Client();

function Rolls(min,max){
	return min+Math.floor(Math.random()*(max-min+1));
}

module.exports = {
	name: 'kill',
	description: 'envoie un gif kill.',
	execute(message, args) {
		const graph = [img.killOne, img.killTwo, img.killTree, img.killFwo, img.killFive, img.killSix, img.killSeven, img.killHeigt, img.killNine, img.killTen, img.killkill];
		const emote = [":bomb:", ":axe:", ":gun:", ":knife:"];
		const number = Number(Rolls(0, 9));
		const numberEmote = Number(Rolls(0, 3));
		const user = message.mentions.users.first() || message.author;
		const embed = new MessageEmbed()
			.setColor(0x660066)
			.setDescription(`${message.author.username} à kill ${user.username} ${emote[numberEmote]}${emote[numberEmote]} :boom:! !`)
			.setImage(graph[number])
			.setFooter(`Aɱαƚҽɾαʂυ au service de ${message.author.username}`);
		message.channel.send(embed)
		message.delete(message.author)
	},
};