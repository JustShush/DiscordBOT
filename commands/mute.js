const ms = require('ms');
module.exports = {
    name: 'mute',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description: "This mutes a member",
    execute(client, message, args) {
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === '🐽 | PORCA');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Dumbass got Muted!');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> foi mute`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> foi mute por ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Não consegui encontrar esse membro!');
        }
    }
}