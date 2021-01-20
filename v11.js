const Discord = require('discord.js')

const serverID = '742798585086607401';
const channelID = '790630359678451742';
const messageID = '800252423557742622';
const fivem = require('discord-fivem-api');
client.on('ready', () => {
  setInterval(() => {
  let sPlayers = [];
  fivem.getServerInfo('161.97.120.243:30134').then(server => {
    server.players.forEach(p => {
      sPlayers.push(`\`${p.name}\``)
    })
    if(sPlayers.length === 0) sPlayers = [];
    const embed = new RichEmbed()
    .setTitle(`__**Lucaas Flight Simulator**__`)
    .setColor('#25e4ef')
    .addField(`**Server Status**`, `Online`)
    .addField(`**Online Pilots**`, `\`${sPlayers.length}\` / \`${server.infos.vars.sv_maxClients}\``, true)
    .addField(`**Player List**`, `${sPlayers.join(',  ').toString()}`)
    .setImage('https://cdn.discordapp.com/attachments/786251843994648636/795618936313348116/banner.jpeg')
    .setThumbnail('https://cdn.discordapp.com/attachments/780756051023626270/795630850649620490/circle-cropped.png')
    .addField(`Credits to:`, `[Grav](https://github.com/Gravxd)`)
    const mainServer = client.guilds.get(serverID);
    const statusChannel = mainServer.channels.get(channelID);
    statusChannel.fetchMessage(messageID).then(msg => {
      msg.edit(embed)
    })
    
  }).catch(err => {
    console.log(`There was an error: ${err}`)

  })
}, 15000)
})


client.on('message', message => {
if(message.author.bot || !message.guild) return;
if(message.content === 'grav!setup') {
const setup_embed = new Discord.RichEmbed()
.setDescription(`Setting up`);
  message.channel.send(setup_embed).then(msg => {
  const setupDone = new Discord.RichEmbed()
  .setDescription(`Server ID: ${message.guild.id}\nMessage ID: ${msg.id}\nChannel ID: ${message.channel.id}`)
  msg.edit(setupDone)
  })

}
})
