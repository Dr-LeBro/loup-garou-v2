var fs = require('fs');
var xmlParser = require('xml2js').parseString;

const Game = require('../../engine/Game.js');

class LgGame extends Game{

    /**
     * @constructor
     * @this {LgGame}
     * 
     * 
     * @member {number} mjId - id of mj
     * @member {Array.<Player>} couple - id of the two players than make a coople
     * @member {Array} allowedRoles - allowed roles in game
     * @member {Player} designedByRaven - player designed by raven (+ 2 votes)
     * @member {Player} protectedBySalvator - player protexted by salvator
     * @member {number} wolfCount - count of initial wolfs in game
     */
    constructor(){
        super(Game.GameType.LG, true);
        this.mjId = -1;
        this.couple = new Array(); // Store Player's in couple
        this.allowedRoles = new Array(); //Store all allowed roles in game by id
        this.designedByRaven = null; //Player designed by raven
        this.protectedBySalvator = null; //Player protected by salvator
        this.wolfCount = 1;
        fs.readFile('./ressources/games/loup-garou-game.xml', function(err, data) {
            console.error("erreur: " + err);
            xmlParser(data, function (err, result) {
                //TODO: creer la game a partir du parseur
            });
        });
    }

    setWolfCount(newWolfCount){
        if(newWolfCount > this.players.length || newWolfCount == 0){
            return -1;
        }else{

        }
    }

}

module.exports = LgGame;