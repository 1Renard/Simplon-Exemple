const discord = require("discord.js");
const fs = require("fs");
const config = require('./config.json')
const client = new discord.Client();

client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("ready", () => {
	client.user.setActivity("A/help => https://discord.gg/VVzVy3");
	console.log(`${client.user.username} je suis connecté à l\'api`)
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(config.PREFIX)) return;
    
    const args = message.content.slice(config.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('il y a une erreur avec la commande');
	}
});

client.on("message,", (message) => {
	if (message) {
	message.channel.send(`${message.author.name} : ${message.content}`)
	}
});

client.login(config.TOKEN)
