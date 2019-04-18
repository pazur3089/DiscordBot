const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (~msg.content.indexOf("bochen")) {
    msg
      .delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
  }
  if (~msg.content.indexOf("moje")) {
    msg
      .reply("chciales powiedziec nasze?!")
      .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
      .catch(console.error);
  }
  if (msg.content === "our music") {
    var linkList = [
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
    var streamOne;
    var random = parseInt(Math.random() * linkList.length);
    streamOne = sites[random];

    const channel = msg.member.voiceChannel;
    channel
      .join()
      .then(connection => {
        const stream = ytdl(streamOne, { filter: "audioonly" });
        broadcast.playStream(stream);
        const dispatcher = connection.playBroadcast(broadcast);
      })
      .catch(console.error);
  }
});

client.login("TOKEN");
