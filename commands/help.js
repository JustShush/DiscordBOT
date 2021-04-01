module.exports = {
    name: 'help',
    permissions: [],
    description: "this sends help!",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#7e11dd')
            .setTitle('**Help Menu**')
            .addFields({
                    name: 'Moderation',
                    value: '`+help mod`'
                }, {
                    name: 'add the bot to your server.',
                    value: 'do `+on` and click on the title of the embed (YourBestBOT) '
                },

            )
        message.channel.send(newEmbed);
    }

}