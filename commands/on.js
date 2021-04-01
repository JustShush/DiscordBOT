module.exports = {
    name: 'on',
    permissions: [],
    description: "🖖OLÁ SUAS PUTAS JÁ ESTOU ON!!!!",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7e11dd')
        .setTitle('embed')
        .setURL('https://twitch.tv/dimarques4')
        .setAuthor('YourBestBOT', 'https://cdn.discordapp.com/attachments/704028617595682876/813860972283428936/Foto_transparente.PNG', 'https://discord.com/oauth2/authorize?client_id=747412110782234654&scope=bot&permissions=2146958847')
        .setDescription('🖖OLÁ SUAS PUTAS JÁ ESTOU ON!!!!')
        .addFields(
            { name: 'Rule 1', value: 'Be nice'},

        )
        message.delete()
        message.channel.send(newEmbed);
    }
    
}