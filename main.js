const Discord = require('discord.js'); //YOURBESTBOT

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});

require('dotenv').config();  

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})

client.on('message', message => {
  if (message.content.includes("<@!747412110782234654>")) {  // quando as pessoas dao ping no bot ele reponde com isto

    const pingEmbed = new Discord.MessageEmbed()
      .setColor('#323436')
      .setDescription(`Hi <@${message.author.id}> \n Prefix: \`+\` \n If you need any help type: \`+help\` `)
      .addFields({
        name: '\u200B',
        value: "[Support-Server](https://discord.gg/BSfXFmB) | [Invite Bot](https://discord.com/oauth2/authorize?client_id=747412110782234654&scope=bot&permissions=2146958847) | [Vote](https://top.gg/bot/747412110782234654)"
      })
      .setFooter('Developed by JustShush#1995');
    message.channel.send(pingEmbed);
    //message.delete()                                
  }
});

//const memberCounter = require('./counters/member-counter');


//client.on('guildMemberAdd', guildMember => {
//  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '🐽 | PORCA');

//  guildMember.roles.add(welcomeRole);
//  guildMember.guild.channels.cache.get('722531728421421119').send(`Bem vindo <@${guildMember.user.id}> ao server! Não te esqueças de ver as regras!`)
//});

//const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
//for (const file of commandFiles) {
//  const command = require(`./commands/${file}`);
//
//  client.commands.set(command.name, command);
//}

//client.on('message', message => {
//  if (!message.content.startsWith(prefix) || message.author.bot) return;  const args = message.content.slice(prefix.length).split(/ +/);
// const command = args.shift().toLowerCase();
//
//  if (command === 'ping') {
//    client.commands.get('ping').execute(message, args);
//  } else if (command === 'twitch') {
//    client.commands.get('twitch').execute(message, args);
//  } else if (command === 'help') {
//    client.commands.get('help').execute(message, args, Discord);
//  } else if (command === 'rickroll') {
//   client.commands.get('rickroll').execute(message, args);
//  } else if (command === 'allstar') {
//    client.commands.get('allstar').execute(message, args);
//  } else if (command === '80s') {
//    client.commands.get('80s').execute(message, args); // guild é tipo o server 
//  } else if (command === 'kick') {
//    client.commands.get('kick').execute(message, args);
//  } else if (command === 'preçops5') {
//    client.commands.get('preçops5').execute(message, args);
//  } else if (command === 'lançamentops5') {
//    client.commands.get('lançamentops5').execute(message, args);
//  } else if (command === 'cocalatao') {
//    client.commands.get('cocalatao').execute(message, args);
//  } else if (command === 'regras') {
//    client.commands.get('regras').execute(message, args);
//  } else if (command === 'vents') {
//    client.commands.get('vents').execute(message, args);
//  } else if (command === 'skeld') {
//    client.commands.get('skeld').execute(message, args);
// } else if (command === 'mirahq') {
//    client.commands.get('mirahq').execute(message, args);
//  } else if (command === 'polus') {
//    client.commands.get('polus').execute(message, args);
//  } else if (command === 'coochieman') {
//    client.commands.get('coochieman').execute(message, args);
//  } else if (command === 'on') {
//   client.commands.get('on').execute(message, args, Discord);
//  } else if (command === 'clear') {
//    client.commands.get('clear').execute(message, args);
//  } else if (command === 'mute') {
//    client.commands.get('mute').execute(message, args);
//  } else if (command === 'unmute') {
//    client.commands.get('unmute').execute(message, args);
//  } else if (command === 'reactionrole') {
//    client.commands.get('reactionrole').execute(message, args, Discord, client);
//  } else if (command === 'help-mod') {
//    client.commands.get('help-mod').execute(message, args, Discord);
//  } else if (command === 'vote') {
//    client.commands.get('vote').execute(message, args, Discord);
//  }

//})

// o bot reaje a uma certa mensagem 
//client.on('message', message => {
//  if (message.content.includes === 'leite'){
//    message.react('729018151978795068');
//  } else if (message.content === 'engate'){
//    message.react('747608401839915090');
//  }

//});

//client.once('ready', () => {
//  console.log('JÁ está on-line! 1 ');
//
//  client.user.setActivity('+help | https://discord.gg/BSfXFmB', {
//    type: 'PLAYING',
//
//  });

//});


client.login(process.env.DISCORD_TOKEN);
