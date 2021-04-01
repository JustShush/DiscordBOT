module.exports = {
    name: 'whoisbestgirl',
    permissions:[],
    description: "this sends help!",
    execute(client, message, args, Discord) {
        const facts = ["Nino", "Yotsuba", "Itchika", "Miku", "Itsuki", "ATuaPrima!"];
        const fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);
    }

}