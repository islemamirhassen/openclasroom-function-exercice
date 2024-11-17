function afficheResultat(score , NombreTotaleMots){
console.log("le score est " + score + " sur " +NombreTotaleMots)
}
function choisirPhrasesOuMots(){
    let choix=prompt("veuillez liste des mots ou des phrases")
    while(choix!=="mots"&& choix!=="phrases"){
        choix=prompt("veuillez liste des mots ou des phrases")
}
    return choix;
}
function lancerBoucleDejeux(listprosition){
    let score=0
    for (let i=0 ;i<=listprosition.length ; i++ ){
            let motUtilisateur=prompt("le mot est:" +listprosition[i])
            if(motUtilisateur===listprosition[i])
            score++ 
        }
        return score
}
    function lancerJeu(){
        let choix=choisirPhrasesOuMots()
        let NombreTotaleMots=0
        if(choix==="mots"){
        score= lancerBoucleDejeux(listeMots)
            NombreTotaleMots=listeMots.length
        }else{
        score= lancerBoucleDejeux(listePhrases)
            NombreTotaleMots=listePhrases.length
        }
        afficheResultat(score,NombreTotaleMots)

    }
    lancerJeu()
