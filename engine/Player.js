class Player{

    /**
     * 
     * @param {string} newId 
     * @param {string} username 
     * @param {string} nickname 
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