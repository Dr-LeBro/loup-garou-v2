class Reaction{
    /**
     * @enum {String}
     */
    static Reactions = {
        ZERO: "0⃣",
        ONE: "1⃣",
        TWO: "2⃣",
        THREE: "3⃣",
        FOUR: "4⃣",
        FIVE: "5⃣",
        SIX: "6⃣",
        SEVEN: "7⃣",
        EIGHT: "8⃣",
        NINE: "9⃣",
        TEN: "🔟",
        OK: "🆗",
        ARROW_RIGHT: "➡️",
        ARROW_LEFT: "⬅️",
    }

    static getReactionNumber(numberToFind){
        //TODO: a verifier
        if(typeof(numberToFind) == Number){
            switch (numberToFind){
                case 0:
                    return Reaction.Reactions.ZERO;
                case 1:
                    return Reaction.Reactions.ONE;
                case 2:
                    return Reaction.Reactions.TWO;
                case 3:
                    return Reaction.Reactions.THREE;
                case 4:
                    return Reaction.Reactions.FOUR;
                case 5:
                    return Reaction.Reactions.FIVE;
                case 6:
                    return Reaction.Reactions.SIX;
                case 7:
                    return Reaction.Reactions.SEVEN;
                case 8:
                    return Reaction.Reactions.EIGHT;
                case 9:
                    return Reaction.Reactions.NINE;
                case 10:
                    return Reaction.Reactions.TEN;
                default:
                    return Reaction.Reactions.ZERO;
            }
        }
        else{
            return Reaction.Reactions.ZERO;
        }
    } 
}

module.exports = Reaction;