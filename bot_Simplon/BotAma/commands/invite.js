const { MessageEmbed, Client } = require('discord.js');
const client = new Client();

module.exports = {
	name: 'invite',
	description: 'Donne le lien d\'invitation du bot',
	execute(message, args) {
		if (args.join(' ') == "bot") {
			const embed = new MessageEmbed()
				.setColor(0x660066)
				.setDescription(`${message.author.username} le lien d'invitation du bot vous à était envoyé dans votre messagerie privé.`)
				.setFooter("Aɱαƚҽɾαʂυ à votre service");
			message.channel.send(embed);
			
			const embed2 = new MessageEmbed()
				.setColor(0x660066)
				.setTitle("click here = invitation Aɱαƚҽɾαʂυ")
				.setURL("https://discord.com/api/oauth2/authorize?client_id=648336551335428126&permissions=8&scope=bot")
				.setDescription(`Voici mon lien d'invitation ${message.author.username}.`)
				.setImage("https://cdn.discordapp.com/attachments/741552369363320833/767490056910274560/b17d73ee66c26ee36ad74179ec71c928.jpg");
			message.delete(message.author);
			message.member.send(embed2);
			}
		else if (args.join(' ') == "support") {
			const embed = new MessageEmbed()
				.setColor(0x660066)
				.setDescription(`${message.author.username} le lien d'invitation au serveur support vous à était envoyé dans votre messagerie privé.`)
				.setFooter("Aɱαƚҽɾαʂυ à votre service");
			message.channel.send(embed);
			
			const embed2 = new MessageEmbed()
				.setColor(0x660066)
				.setTitle("click here = lien serveur support")
				.setURL("https://discord.gg/3QqMGa4")
				.setDescription(`Voici le lien du serveur support ${message.author.username}`)
				.setImage("https://cdn.discordapp.com/attachments/741552369363320833/767490056910274560/b17d73ee66c26ee36ad74179ec71c928.jpg");
			message.delete(message.author);
			message.member.send(embed2);
			}
		else {
			const embed3 = new MessageEmbed()
				.setColor(0x660066)
				.setDescription(`${message.author.username}, vous n\'avez pas les permissions`);
			message.channel.send(embed3);
			}
	},
};