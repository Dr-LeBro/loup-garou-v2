const cChecks = require('../engine/utils/commandsChecks.js');
const vars = require('../ressources/vars.js');

const LgGame = require('../gameplay/LgGame/LgGame.js');

exports.run = async (bot, data, args) => {
  /* trois arguments, le bot (client), le message (message avec prefix) et les args (Arguments de commandes)
      Arguments de commandes:
      - args[0] -> Channel vocal ou les joueurs sont présents
      - args[1] -> Nom du jeu souhaité
  */

  //racourcis des vars du message (data) 
  let guildId = data.guild.id;

  //test si une partie existe deja
  if(_currentGames[guildId] != null){
    data.channel.send("Une game est deja en cours, faite $endGame");
    return;
  }

  if(args.length < 2){
    data.channel.send("Bad arguments.\n");
  }

  console.log(args);
  //test des arguments
  if(!cChecks.isStringNotEmpty(args[0])){
    data.channel.send("No argument [voice channel] sent.\n");
    data.channel.send("type: ```$help```");
    return;
  }

  if(!cChecks.isStringNotEmpty(args[1])){
    data.channel.send("Give the game name that you want");
    listOfGames = "";
    messageContent = "";
    _avaibleGames.forEach(element => {
      messageContent += "- " + element["name"] + "\n";
      messageContent += element["desc"] + "\n";
    });
    data.channel.send("```"+messageContent+"```");
    data.channel.send("type: ```$help```");
    return;
  }

  if(_currentGames == null){
    data.channel.send("Aucune game n'existe");
  }


  //renomage des arguments de commande
  let channelName = args[0];
  let gameName = args[1];

  //teste si le channel vocal existe
  voiceChannel = bot.channels.find(channel => channel.name == channelName && channel.type == "voice" && channel.guild.id == guildId);
  if(voiceChannel == null || voiceChannel.members.size == 0){
      data.channel.send("Bad voice channel (empty or not in server channel's)");
      return;
  }



  //si tous les tests sont passés, initialise la partie
  _currentGames[guildId] = new LgGame();
  await voiceChannel.members.forEach(member => {
    _currentGames[guildId].addPlayer(member.id, member.user.username);
  });
/*
  //set le tableau de selection des roles (mets a true les roles par defauts)
  let Roleslength = _listOfRole.length;
  for(var i=0; i<Roleslength; i++){
      if(_defaultRoles> i){
          _gameVars[guildId]["allowedRoles"][i] = true;
      }else{
          _gameVars[guildId]["allowedRoles"][i] = false;
      }
  }
*/
  //struture le resumé de la game à envoyer en msg
  let listOfPlayersContent = "";
  players = _currentGames[guildId].players;
  for(i in players){
    listOfPlayersContent += players[i].username+" |";
  }
  if(listOfPlayersContent == ""){
    listOfPlayersContent = "En cours";
  }

  console.log(_currentGames[guildId]);
  let embedContainer = {embed: {
      color: 65280,
      author: {
        name: "Maître suprème de la partie",
        icon_url: bot.user.avatarURL
      },
      title: "Voici votre partie",
      description: "Voici quelques infos sur votre partie en cours de création",
      thumbnail: {
          url: _iconLoupGarou
      },
      fields: [{
          name: "Nombre de joueurs",
          value: "Il y a : "+  _currentGames[guildId].playerCount + "joueurs sur le chan"
        },
        {
          name: "liste des joueurs",
          value: listOfPlayersContent
        },
        {
          //TODO: nb de loups
          name: "nombre de loup(s) garou(s)",
          value: "Il y a: "+0+" loup(s) garou(s)"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: bot.user.avatarURL,
        text: "Partie"
      }
    }
  }

  data.channel.send(embedContainer);

}
  
  exports.help = {
    name: 'startGame', // nom de la commande
    command: '$startGame [Vocal Channel] [number of werewolves]' //example de commande
  }