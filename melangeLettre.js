let myArgs = process.argv.slice(2)

if(myArgs.length>0){// on traite ce qui est passé en param
    for (let index = 0; index < myArgs.length; index++) {
        melangerMot(myArgs[index])
    }
}else{//on prend l'input
    const readline = require("readline")
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question("Entrez votre phrase a mélanger ? ", function(all) {
        let listeMot = all.split(' ')
        for (let index = 0; index < listeMot.length; index++) {
            melangerMot(listeMot[index])
        }
        rl.close()
    })
}
function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function melangerMot(mot) {
    if(mot.length<4){//on ne fait rien
        process.stdout.write(mot+' ')//console.log sans \n
    }else{
        let motFinal = mot.charAt(0)
        let lettreFinal = mot.charAt(mot.length-1)
        mot = mot.substring(1)//on enleve le 1er caractere
        mot = mot.slice(0,mot.length-1)//on enleve le derniere caractere
        while (mot.length>0) {
            let rng = getRandomTime(0,mot.length)
            motFinal+= mot.charAt(rng)
            mot = suppCharALaPos(mot,rng)
        }
        motFinal += lettreFinal
        process.stdout.write(motFinal+' ')
    }
}

function suppCharALaPos(mot,pos) {
    return mot.slice(0, pos) + mot.slice(pos+1)
}