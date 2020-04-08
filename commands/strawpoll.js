const emojiCharacters = require('../misc/emojicharacters');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: '!strawpoll',
    description: 'Create a strawpoll!',
    execute(msg, args) {
        const regex = /"(.+?)"/g; let pArgs = []; let match;
        while (match = regex.exec(args)) pArgs.push(match[1]);
        if(!pArgs[0] || !pArgs[1] || !pArgs[2]){
            let embedsay = new Discord.RichEmbed()
                .setColor('#FF0000')
                .setTitle('Something is wrong here...')
                .setDescription('Check the command syntax')
                .addField('!strawpoll [title] [options...]', "To start a strawpoll!", true)
            msg.channel.send(embedsay);
        }else{
            let options = []; let i;
            
            for (i = 1; i < pArgs.length; i++) {
                options.push(pArgs[i]);
            }
            (async () => {
                const rawResponse = await fetch('https://strawpoll.com/api/poll', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({poll:{title: pArgs[0], answers: options}})
                });
                const content = await rawResponse.json();

                msg.channel.send(
                    "@everyone" + " https://strawpoll.com/" + content["content_id"]
                )
            })();
        }
    }
}