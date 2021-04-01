module.exports = {
    name: 'vote',
    permissions: [],
    description: "sends a link for people to vote",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#7e11dd')
            .setTitle('Vota pela server :)')
            .setURL('https://top.gg/servers/702545447750860931')
            .setThumbnail('https://cdn.discordapp.com/attachments/704028617595682876/811320423031242775/WEBEX.png')
            .addFields({
                name: 'Podes votar aqui:',
                value: 'https://top.gg/servers/702545447750860931',
                inline: true
            }, {
                name: '\u200B',
                value: '\u200B',
                inline: true
            }, )
            .setFooter('WEBEX mas aqui')
        // apaga a mensagem
        message.delete()
        message.channel.send(newEmbed);
    }

}