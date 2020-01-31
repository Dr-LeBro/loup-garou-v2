var fs = require('fs');
var xmlParser = require('xml2js').parseString;

const Board = require('./Board.js');
const Player = require('./Player.js');

class Game{

    static GameType = {
        LG: "loup-garou",
        DEFAULT: "default",
    }

    static getAvaibleGames(){
        fs.readFile( './ressources/games/games.xml', function(err, data) {
            xmlParser(data, function (err, result) {
                _avaibleGames = new Array();
                let i=0;
                result["games"]["game"].forEach(element => {
                    _avaibleGames[i] = {
                        "name": element["$"]["name"],
                        //TODO: regexp pour enlever retour a la ligne et tabulations 
                        "desc": element["_"],
                        }
                    i++;
                });
            });
        });
    }

    constructor(gameType, haveCards=false, haveCases=false){
        this.players = new Array();
        this.board = new Board(haveCards, haveCases);
        this.stateOfGame = -1;
        if(Object.values(Game.GameType).includes(gameType)){
            this.gameType = gameType;
        }else{
            this.gameType = GameType.DEFAULT;
        }

    }

    addPlayer(newPlayer){
        this.players.push(newPlayer);
    }

    addPlayer(playerId, playerName){
        console.log(playerId + "   " + playerName)
        this.players.push(new Player(playerId, playerName));
    }

    removePlayer(playerToRemove){
        if(playerToRemove == null) return 0;
        let filter = player => player.id == playerToRemove.id;
        this.players[this.players.findIndex(filter)] = null;
        return 1;
    }

    get playerCount(){
        return this.players.length;
    }

    launchGameSettings(){
        if(this.stateOfGame == -1){
            this.stateOfGame = 0;
        }
    }
}

module.exports = Game;

