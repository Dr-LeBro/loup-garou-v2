class Player{

    /**
     * 
     * @param {String} newId 
     * @param {String} username 
     * @param {String} nickname 
     */
    constructor(newId, username, nickname = null){
        this.id = newId;
        this.username = username;
        if(nickname == null){
            nickname = username;
        }
        this.nickname = nickname;
    }

}

module.exports = Player;