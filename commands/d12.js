module.exports = { 
    name: 'd12',
    description: 'Rola o dado de 12 lados',
    execute(message, args) {
        const d12 = (Math.floor(Math.random() * 12) + 1);
        message.channel.send(d12);   
    }
};