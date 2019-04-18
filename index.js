const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();

client.on('ready', () => {
	 console.log(`Logged in as ${client.user.tag}!`);
	 });

client.on('message', msg => {
		
	 if (~msg.content.indexOf('bochen')) {
		  msg.delete()
		   .then(msg => console.log(`Deleted message from ${msg.author.username}`))
		   .catch(console.error);
		  }
	  if (~msg.content.indexOf('moje')) {
		  	  msg.reply('chciales powiedziec nasze?!')
		  	  .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
		  		.catch(console.error);
		   }
	  if (msg.content === 'our music')	 
		  {
		  	var stream1;
		      var min=0; 
		      var max=8;  
		      var random =Math.floor(Math.random() * (+max - +min)) + +min;
		  	if(random == 0) 
			  	{
						stream1 = 'https://www.youtube.com/watch?v=MLg83QMmlGs';
					}
		  	if(random == 1)
			  	{
						stream1 = 'https://www.youtube.com/watch?v=OjINuMEuSKA';
					}
		  	if (random == 2)
			  	{
						stream1 = 'https://www.youtube.com/watch?v=z7lZPSZFQak';
					}
		  	if(random == 3)
			  	{
						stream1 = 'https://www.youtube.com/watch?v=YEt41bYQBgE';
					}
		  	if(random == 4)
			  	{
						stream1 = 'https://www.youtube.com/watch?v=H4V2jlhWJD4';
					}
		  	if(random == 5)
			  	{
						stream1 = 'https://www.youtube.com/watch?v=zgKazTrhXmI';
					}
		  	if(random == 6)
			  	{
						stream1 = 'https://www.youtube.com/watch?v=NVpjt9gHlDw';
					}
		  	if(random == 7)
			  	{
						stream1 = 'https://www.youtube.com/watch?v=umEDct4BoGc';
					}
		  	if(random == 8)
			  	{
						stream1 = 'https://www.youtube.com/watch?v=jZLHsqOXFkc';
					}
		  const channel = msg.member.voiceChannel;
		  channel.join()
		    .then(connection => {
			        const stream = ytdl(stream1, { filter : 'audioonly' });
			        broadcast.playStream(stream);
			        const dispatcher = connection.playBroadcast(broadcast);
			      })
		    .catch(console.error);

		    }
	 });
 

client.login('NTY4NDQ3MTcyODQwNzgzODky.XLiUXg.jhxpDbw0RGU0c82qlQak9fI2xvc');
