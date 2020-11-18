const { MessageReaction, MessageEmbed, Client } = require('discord.js');
const client = new Client();
const fs = require('fs');

module.exports = {
	name: 'corbeau',
	description: 'envoie un message dans la messagerie privée d\'un membre.',
	execute(message, args) {
		const emote = [ "<:detruire:767324429415874612>",  "<:corbeau:767324514173452289>" ];
		const user = message.author;
		const convert = args.join(' ').split('Contenu : ');
		const info = "id utilisateur : " + user.id + "\nNom utilisateur : " + user.username + "\ndestinataire : " + convert[0] + "\nargument : " + String(convert[1]);
		var userid = message.mentions.users.first()
		
		message.delete(message.author);
		const embed1 = new MessageEmbed()
			 .setColor(0x660066)
			 .setDescription(`le corbeau à bien était transmettre le message à ${userid.username}`)
			.setImage ("https://cdn.discordapp.com/attachments/741552369363320833/767459341116112896/1603046957865.png");
		message.channel.send(embed1);
		
		const embed = new MessageEmbed()
			.setColor(0x660066)
			.setTitle("**__Corbeau__**")
			.setDescription(`de Nom : *${user.username}*\nID : *${user.id}*\n\n	***\"\***\n		*${String(convert[1])}*			***\"\***`)
			.setThumbnail(user.avatarURL({ dynamic: true }))
			.setImage("https://cdn.discordapp.com/attachments/741552369363320833/767461109842051092/1603047377141.png")
			.setFooter(`${user[1]}`);
		message.delete(message.author);
		userid.send({embed: embed}).then(embedMessage => {
    		embedMessage.react("767324429415874612")
    		embedMessage.react("767324514173452289");
    	})
    	fs.writeFile('./bdd/corbeau.txt', info, function(err) {
  		if(err) return console.error(err);
		});
	},
};