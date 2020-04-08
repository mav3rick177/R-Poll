const emojiCharacters = require('../misc/emojicharacters');
const Discord = require('discord.js');

module.exports = {
    name: '!help',
    description: 'Help!',
    execute(msg, args) {
        let embedsay = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('R-Poll Command List')
            .setDescription("Version 1.0.1")
            .addField(emojiCharacters.poll + 'Poll', '!poll [title] [options]', true)
            .addField(emojiCharacters.dice + 'Randomize', '!randomize [list]', true)
            .addField(emojiCharacters.barchart + 'Strawpoll', '!strawpoll [title] [options]', false);
        msg.channel.send(embedsay);
    }
}