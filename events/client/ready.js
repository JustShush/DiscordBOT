const memberCounter = require("../../counters/member-counter");

module.exports = (Discord, client, message) => {
    //const newUsers = [];

    client.user.setActivity('+help | https://discord.gg/BSfXFmB', {
        type: 'PLAYING',
    });

    console.log('JÁ está on-line!');
}