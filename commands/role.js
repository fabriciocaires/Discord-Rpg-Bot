module.exports = {
    name: 'role',
    description: 'your role at the guild',
    args: true,
    usage: '<user> <role>',
    execute(message, args) {
        message.channel.send(`${user} is in the role: ${role}`);
    },
};