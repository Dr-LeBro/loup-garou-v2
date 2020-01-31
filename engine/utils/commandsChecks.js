function isStringNotEmpty(string){ //test si la var et bien une chaine de caractere est si elle n'est pas vide 
    if(typeof(string) !== "string" ||  !string || string.trim() == ""){
        return false;
    }else{
        return true;
    }
}

function isNumber(int){ //test si la var et bien une chaine de caractere est si elle n'est pas vide 
    if(typeof(int) !== "number"){
        return false;
    }else{
        return true;
    }
}

module.exports = {
    isStringNotEmpty,
    isNumber
}