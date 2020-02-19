//Mettre _ devant le nom d'une variable globale

global._currentGames = {};

global._gameVars = {};

var _initGame = {
    "stateOfGame" : -1,
    "rolesMapping" : {},
    "gameRoles": {"mort": null, "mj": null},
    "channels": {},
    "playersCount" : 0,
    "mjId": -1,
    "players": [],
    "wolfsCount": -1,
    "allowedRoles": [],
    "votingSession": {"isOpen": false, "current": null, "currentMsg": null, "last": null},
    "roleSelectionInterface": {"message": null, "index": 0},
    "specialGameVar": {"DesignedByRaven": null, "cupidonCouple": [], "protectedBySalvator": null}//DesignedByRaven -> idOfPlayer, cupidonCOuple idOfPlayers
};

var roleDeadName = "mort";
global._listOfRole = ["loup", "villageois", "petite-fille", "sorcière","voyante", "cupidon", "chasseur", "voleur", "corbeau", "chaman", "salvateur", "ancien", "enfant-sauvage", "soubrette", "idiot-du-village", "ange"]; //12 _ 0->11 .... 15 _ 0->14
global._defaultRoles = 2; //roles activés par defaut, il faut donc les eviter lors du set par l'utilisateur 
global._descriptionOfRoles = {};

global._listOfEmotesNumber = [":zero:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:", ":keycap_ten: "]// 11 _ 0->10
//TODO: faire emotes perso
global._arrayOfReactions = ["0⃣", "1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣", "🔟", "➡", "🆗"];//13 _ 0->12

var rolesFolder = "votre-role";
var partyFolder = "partie";
global._iconLoupGarou = "https://www.loups-garous-en-ligne.com/stuff/facebook/carte2.png";

var defaultsChannels = [
    {"name":"cimetière", "type":"text"},
    {"name":"vote", "type":"text"},
    {"name":"village", "type":"voice"},
    {"name":"résumé-mj", "type":"text"},
    {"name":"resumé", "type":"text"},
];

function initDescriptions(){
    _descriptionOfRoles['loup'] = "Toutes les nuits il peut parler avec les autres loups pour manger quelqu'un";//OK
    _descriptionOfRoles['villageois'] = "Aucun pouvoir autre que voter pour éliminer quelqu'un";//OK
    _descriptionOfRoles['voyante'] = "Chaque nuit elle peut savoir l'identité de quelqu'un";//OK
    _descriptionOfRoles['petite-fille'] = "Chaque nuit elle peut écouter les loups";//Chaud pour le moment
    _descriptionOfRoles['sorcière'] = "Elle possède deux potions à usage unique, une de mort pour tuer quelqu'un à n'importe quel moment et une potion pour sauver la victime des loups";//OK
    _descriptionOfRoles['chasseur'] = "Quand il meurt il peut tuer quelqu'un";//OK
    _descriptionOfRoles['cupidon'] = "Il choisit deux personne en début de partie, ces deux personnes doivent survivre durant toute la partie, si l'un des deux meurt l'autre se suicide de chagrin. Commande: $cCouple [nickName1] [nickName2]";//OK--
    _descriptionOfRoles['voleur'] = "Il peut prendre un rôle dans ceux qui n'ont pas été attribué ";//OK--
    _descriptionOfRoles['ancien'] = "Il peut résister à la première attaque des loups. Mais s'il est tué par les villageois, ils perdent tous leurs pouvoirs";//OK--
    _descriptionOfRoles['chaman'] = "Chaque nuit il peut écouter les morts" ;// poser question
    _descriptionOfRoles['salvateur'] = "Il peut protéger une personne de l'attaque des loups une fois par nuit. Commande: $sProtect [nickName]";//OK--
    _descriptionOfRoles['enfant-sauvage'] = "Il choisit un modèle en début de partie si ce modèle meurt l'enfant devient loup-garou"; //OK --
    _descriptionOfRoles['corbeau'] = "Chaque nuit il peut choisir un joueur qui aura 2 vote en plus CONTRE LUI lors du prochain vote. Commande: $rChoice [nickName]";//OK+
    _descriptionOfRoles['soubrette'] = "Elle peut a tout moment choisir de recuperer le role d'un mort avant qu'il ne soit devoilé";//OK
    _descriptionOfRoles['idiot-du-village'] = "Simple villageois, à l'exeption prés qu'il ne meurt pas s'il le village vote contre lui. En écgance de cette grâce, il perd son droit de vote";//OK
    _descriptionOfRoles['ange'] = "Son but est de se faire tuer par le village pour gagner la partie";//OK
    //console.log("finish descriptions");
}


module.exports = {
    initDescriptions,
    _initGame,
    defaultsChannels,
    rolesFolder,
    partyFolder,
    roleDeadName
}