module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    discription: 'kick em alguem do servidor',
    execute(client, message, args) {
        const target = message.mentions.users.first();

        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            if (message.member.permissions.has('KICK_MEMBERS')) {
                memberTarget.kick();
                message.channel.send('The user was kicked!');
            }
        } else {
            message.channel.send('You need to meantion a member!');
        }
    }
}