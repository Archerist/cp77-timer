import * as DC from 'discord.js';

const client = new DC.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


client.on('message', msg => {
    if ( msg.content.match(".cp77.when.")){
        msg.channel.send("neva")
    }
});

client.login(process.env.TOKEN);

//deneme