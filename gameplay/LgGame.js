var fs = require('fs');
var xmlParser = require('xml2js').parseString;

const Game = require('../engine/Game.js');

class LgGame extends Game{
    constructor(){
        super(Game.GameType.LG, true);
        this.mjId = -1;
        fs.readFile( './ressources/games/loup-garou-game.xml', function(err, data) {
            console.error("erreur: " + err);
            xmlParser(data, function (err, result) {
                //TODO: creer la game a partir du parseur
            });
        });
    }
}

module.exports = LgGame;