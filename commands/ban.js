module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    discription: 'kick em alguem do servidor',
    execute(client, message, args) {
        const target = message.mentions.users.first();

        if (message.member.permissions.has("BAN_MEMBERS")) {

        } else {
            message.channel.send('nao tens as permissoes necessarias!');
        }

        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send('o user foi kick');
        } else {
            message.channel.send('tens de mencionar alguém!');
        }
    }
}