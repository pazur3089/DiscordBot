const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };

const linkList = [
	"https://www.youtube.com/watch?v=MLg83QMmlGs",
	"https://www.youtube.com/watch?v=OjINuMEuSKA",
	"https://www.youtube.com/watch?v=z7lZPSZFQak",
	"https://www.youtube.com/watch?v=YEt41bYQBgE",
	"https://www.youtube.com/watch?v=H4V2jlhWJD4",
	"https://www.youtube.com/watch?v=zgKazTrhXmI",
	"https://www.youtube.com/watch?v=NVpjt9gHlDw",
	"https://www.youtube.com/watch?v=umEDct4BoGc",
	"https://www.youtube.com/watch?v=jZLHsqOXFkc"
];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
	console.log(`${client.status}`);
  if (~msg.content.indexOf("bochen")) {
    msg
      .delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
  }
  if (~msg.content.indexOf("idi")) {
    msg.member.voiceChannel.leave();
  }
  if (msg.content === "our bond")
    playMusic("https://www.youtube.com/watch?v=q_fI3EWYZqU");

  if (msg.content === "our music") {
    playMusic(randomLink());
  }

  function randomLink() {
    return linkList[parseInt(Math.random() * linkList.length)];
  }

  function playMusic(linkMusic) {
	  const channel = msg.member.voiceChannel;
    channel.join()
        .then(connection => {
        const stream = ytdl(linkMusic, { filter: "audioonly" });
        const dispatcher = connection.playStream(stream, streamOptions);
      })
      .catch(console.error);
  }
});
client.login("TOKEN");
