module.exports = {
    name: 'teste',
    permissions: [],
    description: "this sends help!",
    execute(client, message, args, Discord) {
        setInterval(() => {
            for (let i = 0; i < 5; i++) {
                const channel = client.channels.cache.find(channel => channel.name === "spam")
                channel.send("+teste")
                //console.log("teste" + i )
            }
        }, 7000)
    }
}
