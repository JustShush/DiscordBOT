module.exports = async (client) =>{
    const guild = client.guilds.cache.get('702545447750860931');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('812418114384822282');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 	600000);
}
