import * as DC from 'discord.js';
import moment from 'moment';
import 'moment-precise-range-plugin';

const client = new DC.Client();

const countdown_day = moment('2020-19-11 00:00:00', 'YYYY-DD-MM HH:mm:ss')
const one_day = 1000 * 60 * 60 * 24 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


client.on('message', msg => {
    if ( msg.content.match(/.*(cp77|cyberpunk(|77)).*when.*/gi) ){
        let present = moment();
        let diff = moment.preciseDiff(countdown_day,present)

        console.log(diff);
        console.log(present);
        
  
        


    }
});

client.login(process.env.TOKEN);

//19TH NOVEMBER 2020 AT 12:00AM

