module.exports = { 
    name: 'd8',
    description: 'Rola o dado de 8 lados',
    execute(message, args) {
        const d8 = (Math.floor(Math.random() * 8) + 1);
        message.channel.send(d8);   
    }
};