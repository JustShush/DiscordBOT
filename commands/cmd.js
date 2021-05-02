module.exports = {
    name: 'cmd',
    permissions: [],
    description: "this sends help!",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#7e11dd')
            .setTitle('**Commands**')
            .addFields({
                    name: 'Vote for the server',
                    value: '`+vote`',
                    inline: true
                }, {
                    name: 'Check your ping',
                    value: '`+ping`',
                    inline: true
                }, {
                    name: '\u200B',
                    value: '\u200B',
                    inline: true
                }, {
                    name: 'Quem é que é GAY?',
                    value: '`+quemequeegay`',
                    inline: true
                }, {
                    name: 'Who is Best Girl?',
                    value: '`+whoisbestgirl`',
                    inline: true
                }, )

            
        message.channel.send(newEmbed);
    }

}
