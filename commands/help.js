const emojiCharacters = require('../misc/emojicharacters');
const Discord = require('discord.js');

module.exports = {
    name: '!help',
    description: 'Help!',
    execute(msg, args) {
        let embedsay = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('R-Poll Helper Command List')
            .setDescription("Version 1")
            .addField(emojiCharacters.poll + 'Poll', '!poll [title] [options]', true)
            .addField(emojiCharacters.dice + 'Randomize', '!randomize [list]', true);
        msg.channel.send(embedsay);
    }
}