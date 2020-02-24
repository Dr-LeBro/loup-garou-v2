var fs = require('fs');
var xmlParser = require('xml2js').parseString;

const Board = require('./Board.js');
const Player = require('./Player.js');

class Game{
    /**
     * @readonly
     * @enum {string}
     */
    static GameType = {
        LG: "loup-garou",
        DEFAULT: "Nan",
    }

    /**
     * @readonly
     * @enum {number}
     */
    static GameState = {
        STOPPED : -2,
        ENDED : -1,
        NEW : 0,
        IN_SETTINGS : 1,
        INITIALIZED : 2,
        LAUNCHED : 3,
    }


    static gamesStorage = null;
    static gamesAvaible = null;

    static initGamesStorage(){
        Game.gamesStorage = {}
    }

    static initAvaibleGames(){
        fs.readFile( './ressources/games/games.xml', function(err, data) {
            xmlParser(data, function (err, result) {
                Game.gamesAvaible = new Array();
                let i=0;
                result["games"]["game"].forEach(element => {
                    Game.gamesAvaible[i] = {
                        "name": element["$"]["name"],
                        //TODO: regexp pour enlever retour a la ligne et tabulations 
                        "desc": element["_"],
                        }
                    i++;
                });
            });
        });
    }

    /**
     * @param {Game} game 
     * @param {string} guildId
     */
    static addGameToStorage(game, guildId){
        Game.gamesStorage[guildId] = game;
    }

    /**
     * @param {string} guildId
     * @param {boolean} [force=false]
     */
    static removeGameFromStorage(guildId, force = false){
        Game.gamesStorage[guildId] = null;
    }

    /**
     * @constructor
     * @this {Game} - instance than represent a game specs with players cards cases... 
     * 
     * @param {GameType} gameType - type of the game
     * @param {boolean} haveCards - if game have cards or not
     * @param {boolean} haveCases - if game have cases on board or not
     * 
     * @member {Array.<Player>} players - players in game
     * @member {Board} board - board of the game 
     * @member {number} stateOfGame - state of the game
     * @member {GameType} gameType - type of the game
     * 
     */
    constructor(gameType, haveCards=false, haveCases=false){
        this.players = new Array(); //List of players in game (class Player)
        this.board = new Board(haveCards, haveCases); //Game Board (class Board) 
        this.stateOfGame = Game.GameState.NEW; //State of game: 0 = NEW
        if(Object.values(Game.GameType).includes(gameType)){
            this.gameType = gameType;
        }else{
            this.gameType = GameType.DEFAULT;
        }

    }

    /**
     * 
     * @param {Player} newPlayer 
     */
    addPlayer(newPlayer){
        this.players.push(newPlayer);
    }

    /**
     * 
     * @param {string} playerId 
     * @param {string} playerName 
     */
    addPlayer(playerId, playerName){
        console.log(playerId + "   " + playerName)
        this.players.push(new Player(playerId, playerName));
    }

    /**
     * 
     * @param {Player} playerToRemove 
     */
    removePlayer(playerToRemove){
        if(playerToRemove == null) return 0;
        let filter = player => player.id == playerToRemove.id;
        this.players[this.players.findIndex(filter)] = null;
        return 1;
    }

    /**
     * 
     * @param {Function} callback 
     */
    closeGame(callback){
        callback();
    }

    /**
     * 
     * @param {Function} callback 
     */
    launchGameSettings(callback){
        if(this.stateOfGame == Game.GameState.NEW){
            callback();
            this.stateOfGame = Game.GameState.IN_SETTINGS;
        }
    }

    /**
     * 
     * @param {Function} callback 
     */
    initGame(callback){
        if(this.stateOfGame == Game.GameState.INITIALIZED){
            callback();
            this.stateOfGame = Game.GameState.LAUNCHED;
        }
    }
    
    /**
     * 
     * @param {Function} callback 
     */
    launchGame(callback){
        if(this.stateOfGame == Game.GameState.INITIALIZED){
            callback();
            this.stateOfGame = Game.GameState.LAUNCHED;
        }
    }

    get playerCount(){
        return this.players.length;
    }

    static get avaibleGames(){
        var string = "";
        Game.gamesAvaible.forEach(game=>{
            string += game["name"] +": "+ game["desc"] + "\n";
        });
        return string;
    }

}

module.exports = Game;

