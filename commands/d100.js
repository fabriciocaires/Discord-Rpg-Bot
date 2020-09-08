module.exports = { 
    name: 'd100',
    description: 'Rola dois dados de 9 lados',
    execute(message, args){
        const d100 = (Math.floor(Math.random() * 9) + 1);
        const d10 = (Math.floor(Math.random() * 9) + 1);
        message.channel.send(d100);
        message.channel.send(d10);  
    }
};