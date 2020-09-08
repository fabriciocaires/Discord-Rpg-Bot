module.exports = { 
    name: 'd6',
    description: 'Rola o dado de 6 lados',
    execute(message, args){
        const d6 = (Math.floor(Math.random() * 6) + 1);
        message.channel.send(d6);   
    }
};