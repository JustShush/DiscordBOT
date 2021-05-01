const memberCounter = require("../../counters/member-counter");

module.exports = (Discord, client, message) => {
    //const newUsers = [];

    //client.user.setActivity(`${client.guilds.cache.size} servers`, {
    //    type: 'WATCHING',
    //});

    const arrayOfStatus = [
        `Over ${client.guilds.cache.size} servers! 🙂`,
        `Prefix is: "+"`,
        "+help | https://discord.gg/BSfXFmB",
    ];

    const arrayOfNada = [
        'WATCHING',
        'type: "STREAMING", url: "https://www.twitch.tv/dimarques4"',
        'WATCHING',
    ]

    let index = 0;
    setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status, {
            type: "WATCHING"
        }).catch(console.error)
        index++;
    }, 7000)

    console.log('JÁ está on-line!');
}