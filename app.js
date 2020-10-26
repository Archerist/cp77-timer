import * as DC from 'discord.js';
import 'moment';
import 'moment-precise-range-plugin';
import moment from 'moment-timezone';

const client = new DC.Client();

const countdown_day = moment('2020-19-11 00:00:00', 'YYYY-DD-MM HH:mm:ss').tz('Europe/Warsaw')
const one_day = 1000 * 60 * 60 * 24 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {

    
    
    if ( msg.content.match(/.*(cp(|20)77|cyberpunk(|(|20)77)).*when.*/gi) ){

        let present = moment().tz('Europe/Warsaw');
        let diff = moment.preciseDiff(countdown_day,present)
        let message;
        if(countdown_day.format('x') - present.format('x') >0 ){
            message = `${diff}`;
        } else {
            message = "Wake the fuck up samurai";
        }

        let embed = new DC.MessageEmbed()
        .setColor('#FFFF00')
        .setTitle('Time until CP77 Release')
        .addField(`${message}`, `2020-19-11 00:00:00 CEST (Europe/Warsaw)`)
        .setThumbnail('https://cdn.discordapp.com/avatars/768565170297372726/c8b4c005134e3c9badccdb48c425f43b.png')
        .setFooter('Github:Archerist/CP77-Timer | MIT License');

        msg.channel.send(embed);
    }
})

client.login(process.env.TOKEN);

//19TH NOVEMBER 2020 AT 12:00AM

