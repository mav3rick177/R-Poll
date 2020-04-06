const emojiCharacters = require('../misc/emojicharacters');
const Discord = require('discord.js');

module.exports = {
    name: '!randomize',
    description: 'Randomize!',
    execute(msg, args) {
        if (msg.mentions.users.size) {         
            let counter = 1;
            let userList = [];
            for (const [ index, taggedUser ] of msg.mentions.users.entries()) {
                userList.push(emojiCharacters[counter++]+ ' ' + taggedUser.username);
                userList.push('\u200B');
            }
            const randomtaggedUser = msg.mentions.users.get([...msg.mentions.users.keys()][Math.floor(Math.random() * msg.mentions.users.size)]);
            let embedsay = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setAuthor(msg.author.tag, msg.author.avatarURL)
                .setTitle('Randomize')
                .setDescription('Get a random person')
                .addField('List', userList, true)
                .addField('Result', randomtaggedUser.username, true)
                .setTimestamp();
            msg.channel.send(embedsay);
        } else {
            msg.reply('Please tag a valid user!');
        }
    },
};
  