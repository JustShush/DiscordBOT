module.exports = {
    name: 'teste',
    permissions: [],
    description: "this sends help!",
    execute(client, message, args, Discord) {
        for (let i = 0; i < 5; i++) {
            console.log("teste" + i )
        }

    }

}