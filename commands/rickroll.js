module.exports = {
  name: 'rickroll',
  permissions: [],
  description: "sends a link ",
  execute(client, message, args) {
    message.channel.send('https://youtu.be/dQw4w9WgXcQ');
  }

}