module.exports = {
    name: 'regras',
    permissions: [],
    description: "diz as regras do server",
    execute(client, message, args, Discord) {
        const embed = new Discord.MessageEmbed()
        .setColor('#ff00ff')
        .setTitle('**Regras do Server**')
        .setThumbnail('https://cdn.discordapp.com/attachments/704028617595682876/755896704838008882/Captura_de_ecra_2020-09-16_as_22.01.49.png')
        .setDescription('regras')
        .addField('\u200B', '\u200B')
        .addFields({
            name: '\u200B',
            value: 'regra n1',
            inline: false
        }) 
        message.channel.send(embed);
        

        
    }

};



