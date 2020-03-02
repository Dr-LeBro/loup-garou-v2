//
const fs = require('fs');
const Discord = require('discord.js');

const vars = require('./ressources/vars.js');
const Game = require('./engine/Game.js');

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.gameEvents = new Discord.Collection();
bot.interfaceReactionEvents = new Discord.Collection();

//bot.login('NTM0NzU4Njc1MjY1NjE3OTIw.XjITPw.Q4sYlr8eWUZuPgtaZjwhxcLxAyE'); //bot release
bot.login('NTM5OTIyNjA0NzEwOTUyOTcx.XjITuA.xIWsGmwl9MvNtTt2rgVYlt7hlgA'); //bot TEST

const prefix = '$';

/*
Lecture des commandes dans le dossier commands
*/
fs.readdir('./commands/', (err, files) => {  // This line of code reads all files from our "commands" folder
  if(err) console.error(err); // If there is an error, send it to console.

  let cmds = files.filter(f => f.split('.').pop() === 'js'); // This array will contain all files with 'js' extension
  
  if(Object.keys(cmds).length <= 0) { // If array contains less than, or exactly 0 objects, send message that there is no commands to load
    return console.log('No command files found...');
  }else{
    console.log(`Il y a ${Object.keys(cmds).length} commandes...`); // Optional, prints how many commands we are loading
  }
  cmds.forEach((f, i) => { // Execute this code for every file from our array, f is files, and i stands for number
    const command = require(`./commands/${f}`); // Require file with command
    console.log(`commande: ${command.help.name} chargé!`); // When command is loaded, log it into console
    bot.commands.set(command.help.name, command); // Push command name and file with it's code to our Collection
  }); 
});

fs.readdir('./gameEvents/', (err, files) => {  // This line of code reads all files from our "gameEvents" folder
  if(err) console.error(err); // If there is an error, send it to console.

  let cmds = files.filter(f => f.split('.').pop() === 'js'); // This array will contain all files with 'js' extension
  
  if(Object.keys(cmds).length <= 0) { // If array contains less than, or exactly 0 objects, send message that there is no gameEvents to load
    return console.log('No gameEvents files found...');
  }else{
    console.log(`Il y a ${Object.keys(cmds).length} evenements de jeu...`); // Optional, prints how many gameEvents we are loading
  }
  cmds.forEach((f, i) => { // Execute this code for every file from our array, f is files, and i stands for number
    const gameEvent = require(`./gameEvents/${f}`); // Require file with gameEvents
    console.log(`evenement de jeu: ${gameEvent.help.name} chargé!`); // When gameEvents is loaded, log it into console
    bot.gameEvents.set(gameEvent.help.name, gameEvent); // Push gameEvents name and file with it's code to our Collection
  }); 
});

fs.readdir('./interfaceEvents/', (err, files) => {  // This line of code reads all files from our "interfaceEvents" folder
  if(err) console.error(err); // If there is an error, send it to console.

  let cmds = files.filter(f => f.split('.').pop() === 'js'); // This array will contain all files with 'js' extension
  
  if(Object.keys(cmds).length <= 0) { // If array contains less than, or exactly 0 objects, send message that there is no interfaceEvents to load
    return console.log('No interfaceEvents files found...');
  }else{
    console.log(`Il y a ${Object.keys(cmds).length} evenements de l'interface...`); // Optional, prints how many interfaceEvents we are loading
  }
  cmds.forEach((f, i) => { // Execute this code for every file from our array, f is files, and i stands for number
    const interfaceEvent = require(`./interfaceEvents/${f}`); // Require file with interfaceEvents
    console.log(`evenement de jeu: ${interfaceEvent.help.name} chargé!`); // When interfaceEvents is loaded, log it into console
    bot.interfaceEvents.set(interfaceEvent.help.name, interfaceEvent); // Push interfaceEvents name and file with it's code to our Collection
  }); 
});

/* init core */
Game.initAvaibleGames();
Game.initGamesStorage();
/* init core end */

/* evenement du bot */
bot.on('ready', function () {
    console.log("Je suis connecté !")
    console.log("Il y a ",bot.guilds.cache.size," serveurs connectés: ");
    
    vars.initDescriptions();
    let guilds = bot.guilds.cache.array();
    //console.log("voici les serveurs qui ont le bot:");
    for(guild in guilds){
        let id = guilds[guild].id
        Game.addGameToStorage(null, id);
        //console.log(id);
        let filter = channel => channel.type == 'text' && channel.guild.id == id;
        let channel = bot.channels.cache.filter(filter).first();
        channel.send("Le bot est connecté à votre serveur");
    }
});

//joined a server
bot.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    Game.addGameToStorage(null, guild.id);
    //Your other stuff like adding to guildArray
})

//removed from a server
bot.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    Game.addGameToStorage(null, guild.id);
});


bot.on('message', async data => {
    const messageArray = data.content.split(" "); // Message split into separate objects for example message containing 'Hello there!' would look like this: ["Hello", "there!"]
    const command = messageArray[0]; // Command with prefix
    const args = messageArray.slice(1); // Arguments given to command
    let cmd = bot.commands.get(command.slice(prefix.length)); // We need to get command from our collection
    if(command.startsWith(prefix)){ // If command object starts with prefix
        if(cmd){
          console.log(`--${data.author.username}#${data.author.discriminator} -> '${command}' sur le serveur ${data.guild.name}`); // We can log it to console
          cmd.run(bot, data, args); // If cmd object isn't null, execute command code
        }
      }
});

bot.on('gameEvent', async (gameEvent, data, args)=> {
    let cmd = bot.gameEvents.get(gameEvent); // We need to get gameEvent from our collection
    if(cmd){
      console.log(`--Evenement de jeu -> '${gameEvent}' sur le serveur ${data.guild.name}`); // We can log it to console
      cmd.run(bot, data, args); // If cmd object isn't null, execute gameEvent code
    }
});


bot.on('interfaceEvent', async (interfaceEvent, data, args) => {//args = {"handlerOn": [], "messageToListen": message}
  if(Array.isArray(args.handlerOn) && args.messageToListen instanceof Discord.Message){
    let cmd = bot.interfaceEvents.get(interfaceEvent); // We need to get interfaceEvent from our collection
    if(cmd) cmd.run(bot, data, args); // If cmd object isn't null, execute gameEvent code
    console.log(`--Handler de reactions -> '${interfacenEvent}' sur le serveur ${data.guild.name}`); // We can log it to console
  }else{
    if(!(args.messageToListen instanceof Discord.Message)){
      console.log("arguments: ",args.messageToListen," non valides pour: ", interfaceEvent);
    }else{
      console.log("arguments: ",args.handlerOn," non valides pour: ", interfaceEvent);
    }
    
  }
});