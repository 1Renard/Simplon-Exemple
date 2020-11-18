const { MessageEmbed, Client, Permissions } = require('discord.js');
const client = new Client();

module.exports = {
	name: 'purge',
	description: 'Efface un nombre de messages donner.',
	execute(message, args) {
			const perm = (message.channel.author === "MANAGE_MESSAGES");
			const amount = parseInt(args[0]) +1;
				
			if (message.member.hasPermission("MANAGE_MESSAGES")) {
        		if (isNaN(amount)) {
       	     	return message.reply('Ce n\'est pas un nombre valable');
       	 	};

        		if (amount <= 1 || amount > 100) {
       	     	return message.reply('Le nombre doit etre entre 1 et 100');
        		};
        		message.channel.bulkDelete(amount, true).catch(err => {
        	    	console.error(err);
            	message.channel.send('Il y a eu une erreur pour delete');
        		});
        		const user = message.author;
       	 	const embed = new MessageEmbed()
        			.setColor(0x660066)
        			.setDescription(`${amount - 1} messages ont bien étaient supprimer à votre demande ${user.username}.`)
        			.setThumbnail(user.avatarURL({ dynamic : true }))
        			.setFooter("Aɱαƚҽɾαʂυ à votre service");
        		message.channel.send(embed)
			}
			else {
				const embed = new MessageEmbed()
					.setColor(0x660066)
					.setDescription(`Vous n\'avez pas les permissions requises ${message.author.username} !`);

				message.channel.send(embed) 
				return;
			}
	},
};
 