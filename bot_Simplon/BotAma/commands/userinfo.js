const discord = require('discord.js');
const moment = require('moment');
const client = new discord.Client();

module.exports = {
	name: 'userinfo',
	description: 'Donne des infomations sur l\'utilisateur.',
	execute(message, args) {
    	const user = message.mentions.users.first() || message.author;
    	const member = message.guild.member(user);
    	const tag = user.tag.split("#");
    	const tagtag = "#" + tag[1];
   	 const joinDiscord = moment.utc(user.createdAt).format('LLLL');
    	const joinServer = moment.utc(user.joinedAt).format('LLLL');
  	  const embed = new discord.MessageEmbed()
			.setTitle("**__User Informations__**")
       	 .setDescription(`**Pseudo :**\n\`\`${user.username}\`\`\n\n**Tag :**\n\`\`${tagtag}\`\`\n\n**A rejoint le :**\n\`\`${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}\`\`\n\n**Compte créé le :**\n\`\`${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}\`\`\n\n**Status : **\n\`\`${user.presence.status}\`\`\n\n**ID :**\n\`\`${user.id}\`\``)
      	  .setColor(0x660066)
			.setThumbnail(message.guild.iconURL())
     	   .setImage(user.avatarURL({ dynamic: true }));
       message.delete();
       message.channel.send(embed);
	},
};