function calcular () {
    let soma = 0 
    // recupera o valor da açao social digitado
    //declaração variavel sem tipo
    let acaoSocial = document.getElementById("acaoSocial").value 
    soma = soma + Number(acaoSocial)
    // recupera o valor digitado da homenagem digitado
    
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
   // recupera a qtde de leite  

 
    let mascote = document.getElementById("mascote").value
    soma = soma + Number(mascote)

    let audiovisual = document.getElementById("audiovisual")
    soma = soma +Number(audiovisual)
    
    let leite = document.getElementById("leite").value
    soma = soma + (2 * Number(leite))
    
    let kit = document.getElementById("kit").value
    

    let equipe = document.getElementById("equipe").value
    let pontoskitsupl = 0 // guarda pontuação do kit
    
    let suplemento = document.getElementById("suplemento").value
    
    let arroz5kg = document.getElementById("arroz5kg").value
    soma = soma + Number(5 * arroz5kg)

    let arroz1kg = document.getElementById("arroz1kg").value
    soma = soma + Number(arroz1kg)

    let feijao2kg = document.getElementById("feijao2kg").value
    soma = soma + Number(2 * feijao2kg)

    let feijao1kg = document.getElementById("feijao1kg").value
    soma = soma + Number(feijao1kg)

    let macarrao = document.getElementById("macarrao").value
    soma = soma + Number(0.5 * macarrao)

    let oleo = document.getElementById("oleo").value
    soma = soma + Number(oleo)
    
    if (equipe == "Laranja"){
        // equipe é laranja
        if (kit >= 97 && suplemento >= 49) {
            pontoskitsupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            pontoskitsupl = 4000 + ((kit - 78) * 30) ((suplemento - 39 ) * 15)
        }
        else if (kit >= 49 && suplemento >= 25) {
            pontoskitsupl = 2500 + ((kit - 49) * 30) ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            pontoskitsupl = 1000 + ((kit - 19) * 30) ((suplemento - 10) * 15)
        }
    }
    else if (equipe == "Preta"){
            // equipe é preta
            if (kit >= 103 && suplemento >= 52) {
                pontoskitsupl = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
            }
            else if (kit >= 82 && suplemento >= 42){
                pontoskitsupl = 4000 + ((kit - 82) * 30) ((suplemento - 42 ) * 15)
            }
            else if (kit >= 52 && suplemento >= 26) {
                pontoskitsupl = 2500 + ((kit - 52) * 30) ((suplemento - 26) * 15)
            }
            else if (kit >= 21 && suplemento >= 10){
                pontoskitsupl = 1000 + ((kit - 21) * 30) ((suplemento - 10) * 15)
            
            }
    }

    else if (equipe == "Roxa"){
        // equipe é roxa
        if (kit >= 102 && suplemento >= 51) {
            pontoskitsupl = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
        }
        else if (kit >= 82 && suplemento >= 41){
            pontoskitsupl = 4000 + ((kit - 82) * 30) ((suplemento - 41 ) * 15)
        }
        else if (kit >= 51 && suplemento >= 26) {
            pontoskitsupl = 2500 + ((kit - 51) * 30) ((suplemento - 26) * 15)
        }
        else if (kit >= 20 && suplemento >= 10){
            pontoskitsupl = 1000 + ((kit - 20) * 30) ((suplemento - 10) * 15)
        
        }
}

    else if (equipe == "Verde"){
    // equipe é verde
    if (kit >= 88 && suplemento >= 44) {
        pontoskitsupl = 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15)
    }
    else if (kit >= 70 && suplemento >= 35){
        pontoskitsupl = 4000 + ((kit - 70) * 30) ((suplemento - 35 ) * 15)
    }
    else if (kit >= 44 && suplemento >= 22) {
        pontoskitsupl = 2500 + ((kit - 44) * 30) ((suplemento - 22) * 15)
    }
    else if (kit >= 18 && suplemento >= 9){
        pontoskitsupl = 1000 + ((kit - 18) * 30) ((suplemento - 9) * 15)
    
    }
}

if (equipe == "Vermelha"){
    // equipe é vermelha
    if (kit >= 93 && suplemento >= 47) {
        pontoskitsupl = 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15)
    }
    else if (kit >= 74 && suplemento >= 38){
        pontoskitsupl = 4000 + ((kit - 74) * 30) ((suplemento - 38 ) * 15)
    }
    else if (kit >= 47 && suplemento >= 24) {
        pontoskitsupl = 2500 + ((kit - 47) * 30) ((suplemento - 24) * 15)
    }
    else if (kit >= 19 && suplemento >= 9){
        pontoskitsupl = 1000 + ((kit - 19) * 30) ((suplemento - 9) * 15)
    
    }
}
sangue = Number(document.getElementById("sangue").value)

    if (equipe == "Laranja"){
        if (sangue >= 49){
            pontosSangue = 2500 + (sangue - 49) * 20
        }
        else {
            pontosSangue = sangue * 20
        }
    }
    else if (equipe == "Preta"){
        if (sangue >= 52){
            pontosSangue = 2500 + (sangue - 52) * 20
        }
        else {
            pontosSangue = sangue * 20
        }
    }
    else if (equipe == "Roxa"){
        if (sangue >= 51){
            pontosSangue = 2500 + (sangue - 51) * 20
        }
        else {
            pontosSangue = sangue * 20
        }
    }
    else if (equipe == "Verde"){
        if (sangue >= 44){
            pontosSangue = 2500 + (sangue - 44) * 200
        }
        else {
            pontosSangue = sangue * 20
        }
    }
    else {
        if (sangue >= 47){
            pontosSangue = 2500 + (sangue - 47) * 200
        }
    }
    // soma o sangue
    soma = soma + pontosSangue
    soma = soma + pontoskitsupl 
    
    
    // devolve o resultado para o HTML
    document.getElementById("soma").innerHTML = `R$ ${soma.toFixed(2)}`
    
    

}

