
module.exports = { 
	name: 'd4',
    description: 'Rola o dado de 4 lados',
	execute(message, args) {
        const d4 = (Math.floor(Math.random() * 4) + 1);
        message.channel.send(d4);   
    }
};