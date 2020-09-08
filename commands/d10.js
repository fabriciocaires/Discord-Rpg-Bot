module.exports = { 
    name: 'd10',
    description: 'Rola o dado de 10 lados',
    execute(message, args){
        const d10 = (Math.floor(Math.random() * 10) + 1);
        message.channel.send(d10);   
    }
};