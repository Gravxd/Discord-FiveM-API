const fivem = require('discord-fivem-api');
client.on('ready', () => {
  setInterval(() => {
      let myGuild = client.guilds.cache.get('742798585086607401')
      let memberCount = myGuild.memberCount
      let memberCountChannel = myGuild.channels.cache.get('797178945615298571');
      memberCountChannel.setName('📊 | Members: ' + memberCount)
      .catch(error => console.log(error));
  
  let sPlayers = [];
  fivem.getServerInfo('161.97.120.243:30134').then(server => {
    server.players.forEach(p => {
      sPlayers.push(`\`${p.name}\``)
    })
    if(sPlayers.length === 0) sPlayers = [];
    var embed = new Discord.MessageEmbed() 
    .setTitle(`__**Lucaas Flight Simulator**__`)
    .setColor('#25e4ef')
    .addField(`**Server Status**`, `:white_check_mark: Online`)
    .addField(`**Online Pilots**`, `\`${sPlayers.length}\` / \`${server.infos.vars.sv_maxClients}\``, true)
    .addField(`**Player List**`, `${sPlayers.join(',  ').toString()}`)
    .setImage('https://cdn.discordapp.com/attachments/786251843994648636/795618936313348116/banner.jpeg')
    .setThumbnail('https://cdn.discordapp.com/attachments/780756051023626270/795630850649620490/circle-cropped.png')
    .addField(`Credits to:`, `[Grav](https://github.com/Gravxd)`)
    const mainServer = client.guilds.cache.get('742798585086607401')
    const statusChannel = mainServer.channels.cache.get('790630359678451742');
    statusChannel.messages.fetch('800252423557742622').then((msg)=> {
    msg.edit(embed)
    })
    
  }).catch(err => {
    console.log(`There was an error: ${err}`)

  })
}, 15000)
})
