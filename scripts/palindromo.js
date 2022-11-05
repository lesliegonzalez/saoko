const palindromo = (palabra) =>{
    let convertWord = palabra.replace(/[\W_]/g, "").toLowerCase();
    let reversedWord = convertWord.split("").reverse().join("");
    return convertWord === reversedWord ? true : false;
}

module.exports = {palindromo};