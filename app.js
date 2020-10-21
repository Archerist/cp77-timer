import * as DC from 'discord.js';

const client = new DC.Client();

const countdown_day = new Date(2020, 11, 19) 
const one_day = 1000 * 60 * 60 * 24 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


client.on('message', msg => {
    if ( msg.content.match(/.*(cp77|cyberpunk(|77)).*when.*/gi) ){
        let present = new Date();
        let result = (Math.round(countdown_day.getTime() - present.getTime()) / (one_day)).toFixed(0);

        
  
        let status = '';
            
        if(result > 0) {
        
            status += 'There are ' + result +  ' days left until the release of CP77';
        }
        else
        {
            //Final status
            status += 'Wake up samurai. #Cyberpunk2077 releases today!';
        }
        
        msg.reply(status);        


    }
});

client.login(process.env.TOKEN);

function countdownMessage() {
  
    let status;
    
    if(Final_Result > 0) {
  
        status += 'There are ' + Final_Result +  ' days left until the release of #Cyberpunk2077 #CP2077 #2077';
    }
    else
    {
        //Final status
        status += 'Wake up samurai. #Cyberpunk2077 releases today!';
    }
    
  return status;
    
};
//19TH NOVEMBER 2020 AT 12:00AM

