var fs = require('fs');
var xmlParser = require('xml2js').parseString;

const Game = require('../../engine/Game.js');

class LgGame extends Game{

    /**
     * @constructor
     * @this {LgGame}
     * 
     */
    constructor(){
        super(Game.GameType.LG, true);
        this.mjId = -1;
        this.couple = new Array(); // Stock Player's class (Player)
        this.allowedRoles = new Array(); //Stock allowed roles by id
        this.designedByRaven = null; //Player designed by raven
        this.protectedBySalvator = null; //Player protected by salvator
        fs.readFile( './ressources/games/loup-garou-game.xml', function(err, data) {
            console.error("erreur: " + err);
            xmlParser(data, function (err, result) {
                //TODO: creer la game a partir du parseur
            });
        });
    }
}

module.exports = LgGame;