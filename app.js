const DC = require('discord.js')
const {DateTime, Duration, Settings} = require('luxon')
const client = new DC.Client();

Settings.defaultZoneName = "Europe/Warsaw"

const countdown_day = DateTime.fromObject({year:2020, month: 12, day: 10, hour:1});



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
    
    if ( msg.content.match(/.*(cp(| )(|20)77|cyberpunk(|(|20)77)).*when.*/gi) ){

        let diff = countdown_day.diffNow(['days', 'hours', 'minutes', 'seconds'])
        let message;
        if( diff.as('seconds') > 0 ){
            message = `${diff.days} days, ${diff.hours} hours, ${diff.minutes} minutes and ${Math.floor(diff.seconds)} seconds`;
        } else {
            message = "Wake the fuck up samurai";
        }

        let embed = new DC.MessageEmbed()
        .setColor('#FFFF00')
        .setTitle('Time until CP77 Release')
        //.addField(`${message}`, `2020-12-10 01:00:00 CEST (Europe/Warsaw)`)
        .addField(`My time has come`, `2020-12-10 01:00:00 CEST (Europe/Warsaw)`)
        .addField('https://youtu.be/fqg0y8cTn1U', ' ')
        .setThumbnail('https://en.meming.world/images/en/thumb/a/a1/My_Time_Has_Come.jpg/300px-My_Time_Has_Come.jpg')
        .setFooter('Github:Archerist/CP77-Timer | MIT License');

        msg.channel.send(embed);
    }
})

client.login(process.env.TOKEN);

//19TH NOVEMBER 2020 AT 12:00AM
//LMAO IT GOT DELAYED
//10TH DEC 2020