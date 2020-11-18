const { MessageEmbed, Client } = require('discord.js');
const config = require('../config.json');
const client = new Client();

module.exports = {
	name: 'help',
	description: 'Donne la liste des commandes',
	execute(message, args) {
		const user = message.author;
			
			if (args.join(' ') == false) {
				const embed = new MessageEmbed()
					.setColor(0x660066)
					.setTitle("Liste des commandes")
					.setDescription(`*préfixe du bot :* ${config.PREFIX}\n\n*Faites* \`\`A/help [Nom de la commande]\`\` *pour avoir plus de détails*\n\n**__Moderation__**\n\`\`say\`\`, \`\`userinfo\`\`, \`\`ping\`\`\n\n**__Rôle play__**\n\`\`rolls\`\`\, \`\`livraison\`\`\n\n**__Meme__**\n\`\`kill\`\`, \`\`punch\`\`\n\n**__Autres__**\n\`\`sugg\`\`, \`\`math\`\``);
				user.send(embed);
		
				const embed2 = new MessageEmbed()
					.setColor(0x660066)
					.setDescription(`La liste des commandes viens de vous être envoyé part message privé ${user.username}.`)
					.setThumbnail(user.avatarURL({ dynamic: true }));
				message.channel.send(embed2);
				}
			else if (args.join(' ') == "say") {
				const embed = new MessageEmbed()
					.setColor(0x660066)
					.setTitle("A/say")
					.setDescription(`*préfixe du bot :* ${config.PREFIX}\n\nLa commande \"say\" permet de réécrire le contenu de votre message dans un embed. \n\n__Exemple :__\n\nla commande \`\`A/say salut à tous\`\` est exécuté dans un salon. Sachez que les effets de texte discord sont pris en compte.`)
					. setImage("https://cdn.discordapp.com/attachments/741552369363320833/764971430646513704/IMG_20201012_000304.png");
				user.send(embed);
		
				const embed2 = new MessageEmbed()
					.setColor(0x660066)
					.setDescription(`La description de la commande viens de vous être envoyé part message privé ${user.username}.`)
					.setThumbnail(user.avatarURL({ dynamic: true }));
				message.channel.send(embed2);
				}
			else if (args.join(' ') == "userinfo") {
				const embed = new MessageEmbed()
					.setColor(0x660066)
					.setTitle("A/userinfo")
					.setDescription(`*préfixe du bot :* ${config.PREFIX}\n\nLa commande \"userinfo\" permet d\'afficher les informations d\'un autre utilisateur ou de son compte.\n\n__Exemple :__\n\nla commande est exécuté pour donner vos informations dans le cas 1, dans le cas 2 vous affichez les informations d\'une tiers personne.`)
					.setImage("https://cdn.discordapp.com/attachments/741552369363320833/764979783082835988/IMG_20201012_003553.png");
				user.send(embed);
		
				const embed2 = new MessageEmbed()
					.setColor(0x660066)
					.setDescription(`La description de la commande viens de vous être envoyé part message privé ${user.username}..`)
					.setThumbnail(user.avatarURL({ dynamic: true }));
				message.channel.send(embed2);
				}
			else if (args.join(' ') == "sugg") {
				const embed = new MessageEmbed()
					.setColor(0x660066)
					.setTitle("A/sugg")
					.setDescription(`*préfixe du bot :* ${config.PREFIX}\n\nLa commande \"sugg\" permet d\'envoyer un message embed avec deux réactions qui sont <:Amatoui:734866883844505630> et <:Amatnon:734866920297463849>.\n\n__Exemple :__\n\nla commande est exécuté dans le cas 1, dans le cas 2 est affiché la réponse de cette dernière.`)
					.setImage("https://cdn.discordapp.com/attachments/741552369363320833/765093190784516116/PicsArt_10-12-08.06.53.png");
				user.send(embed);
		
				const embed2 = new MessageEmbed()
					.setColor(0x660066)
					.setDescription(`La description de la commande viens de vous être envoyé part message privé ${user.username}..`)
					.setThumbnail(user.avatarURL({ dynamic: true }));
				message.channel.send(embed2);
				}
			else if (args.join(' ') == "rolls") {
				const embed = new MessageEmbed()
					.setColor(0x660066)
					.setTitle("A/rolls")
					.setDescription(`*préfixe du bot :* ${config.PREFIX}\n\nLa commande \"rolls\" permet d\'envoyer un nombre aléatoires entre deux nombres pré choisi.\n\n__Exemple :__\n\nCi dessous un exemple de rolls entre 1 et 100 et entre 1 et 1000`)
					.setImage("https://cdn.discordapp.com/attachments/741552369363320833/765200314721894400/IMG_20201012_151226.png");
				user.send(embed);
		
				const embed2 = new MessageEmbed()
					.setColor(0x660066)
					.setDescription(`La description de la commande viens de vous être envoyé part message privé ${user.username}..`)
					.setThumbnail(user.avatarURL({ dynamic: true }));
				message.channel.send(embed2);
				}
			else if (args.join(' ') == "math") {
				const embed = new MessageEmbed()
					.setColor(0x660066)
					.setTitle("A/math")
					.setDescription(`*préfixe du bot :* ${config.PREFIX}\n\nLa commande \"math\" permet de faire des calculs simple (addition, soustraction, multiplication et division) entre deux nombres donner.\n\n__Exemple :__\n\nCi dessous un exemple de calcul écrit comme ceci :\n\`\`A/math 10 + 10\`\`\n\n:warning: attention à ne pas oublier les espaces entre les nombres et l\'opérateur. pour utiliser cette commande veuillez employés les symboles +, -, ÷ et ×.`)
					.setImage("https://cdn.discordapp.com/attachments/741552369363320833/765251655385874472/IMG_20201012_183636.png");
				user.send(embed);
		
				const embed2 = new MessageEmbed()
					.setColor(0x660066)
					.setDescription(`La description de la commande viens de vous être envoyé part message privé ${user.username}..`)
					.setThumbnail(user.avatarURL({ dynamic: true }));
				message.channel.send(embed2);
				}
			else if (args.join(' ') == "purge") {
				const embed = new MessageEmbed()
					.setColor(0x660066)
					.setTitle("A/purge")
					.setDescription(`*préfixe du bot :* ${config.PREFIX}\n\nLa commande \"purge\" permet de supprimer jusqu\'à 100 messages.\n\n__Exemple :__\n\nCi dessous un exemple de commande écrit comme ceci :\n\`\`A/purge 20\`\`\n\n`)
					.setImage("https://cdn.discordapp.com/attachments/741552369363320833/765251655385874472/IMG_20201012_183636.png");
				user.send(embed);
		
				const embed2 = new MessageEmbed()
					.setColor(0x660066)
					.setDescription(`La description de la commande viens de vous être envoyé part message privé ${user.username}..`)
					.setThumbnail(user.avatarURL({ dynamic: true }));
				message.channel.send(embed2);
				}
			else {
				return;
				}
	},
};