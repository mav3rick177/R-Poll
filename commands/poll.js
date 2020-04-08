const emojiCharacters = require('../misc/emojicharacters');
const Discord = require('discord.js');

module.exports = {
    name: '!poll',
    description: 'Create a poll!',
    execute(msg, args) {
        const regex = /"(.+?)"/g; let pArgs = []; let match;
        while (match = regex.exec(args)) pArgs.push(match[1]);
        if(!pArgs[0] || !pArgs[1] || !pArgs[2]){
            let embedsay = new Discord.RichEmbed()
                .setColor('#FF0000')
                .setTitle('Something is wrong here...')
                .setDescription('Check the command syntax')
                .addField('!poll [title] [options...]', "To start a poll!", true)
            msg.channel.send(embedsay);
        }else{
            let options = []; let i; let counter = 1; let reactions = [];
            
            for (i = 1; i < pArgs.length; i++) {
                options.push(emojiCharacters[counter]+ ' ' + pArgs[i]);
                options.push('\u200B');
                reactions.push(emojiCharacters[counter++]);
            }
            let embedsay = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setAuthor(msg.author.tag, msg.author.avatarURL)
                .setTitle('Poll')
                .setDescription(pArgs[0])
                .addField('Options List', options, true)
                .setTimestamp();
            msg.channel.send({embed: embedsay}).then(embedMessage => {
                reactions.reduce((promise, emoji) => promise.then(() => embedMessage.react(emoji)), Promise.resolve());
            });
        }
    }
}