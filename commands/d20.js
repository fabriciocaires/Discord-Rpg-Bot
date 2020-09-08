module.exports = { 
    name: 'd20',
    description: 'Rola o dado de 20 lados',
    execute(message, args){
        const d20 = (Math.floor(Math.random() * 20) + 1);
        message.channel.send(d20);   
    }
};