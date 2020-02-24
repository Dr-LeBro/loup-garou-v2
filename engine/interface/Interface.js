class Interface{
    
    /**
     * @constructor
     * @this {Interface}
     * 
     * @param {<tring} name 
     * @param {Array.<ChannelCreationOverwrites>} permissions 
     * 
     * @member {string} name
     * @member {ChannelCreationOverwrites} permissions
     */
    constructor(name, permissions){
        this.name = name; //name of interface
        this.permissions = permissions; //interface permission
    }

    create(){}

    remove(){}

}

module.exports = Interface;