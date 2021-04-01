module.exports = {
    name: 'ping',
    permissions: [],
    description: "this is a ping command!",
    execute(client, message, args) {
        message.channel.send('pong!');
        message.channel.send(`Websocket heartbeat: ${client.ws.ping}ms.`);
    }

}