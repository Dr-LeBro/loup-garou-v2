class Interface{
    
    /**
     * @constructor
     * @this {Interface}
     * 
     * @param {String} name 
     * @param {Array<ChannelCreationOverwrites>} permissions 
     */
    constructor(name, permissions){
        this.name = name; //name of interface
        this.permissions = permissions; //interface permission
    }

    create(){}

    remove(){}

}

module.exports = Interface;