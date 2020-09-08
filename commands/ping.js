module.exports = {
	name: 'ping',
    description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
    },
    name: 'beep',
	description: 'beep',
	execute(message, args) {
        message.channel.send('Boop.');   
    },
};