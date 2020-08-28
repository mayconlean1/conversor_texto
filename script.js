const txt = document.getElementById('ctext')
var txtOriginal = ''
var primeiroTxt = true

function isAlpha(letra){
    let resposta = true
    for (let car of String(letra)){
        if (car.toUpperCase() == car.toLowerCase()){
            resposta = false
            return resposta
            break
        }
    }
    return resposta
}

function originalText(){
    txt.value = txtOriginal
}

function original(){
    
    if(primeiroTxt){
        txtOriginal = txt.value
        primeiroTxt = false
    }
}

function tornarOriginal(){
    txtOriginal = txt.value
}

function lower(){
    txt.value = txt.value.toLowerCase()
}

function upper(){
    txt.value = txt.value.toUpperCase()
    console.log(txtOriginal)
}

function alternado(){
    let caract = txt.value
    let tempText = ''
    let key = true
    for(c of caract){
        if (c != ' '){
            if (key){
                tempText += c.toLowerCase()
                key = false
            }
            else{
                tempText += c.toUpperCase()
                key = true
            }
        }
        else{
            tempText += ' '
        }
        
    }
    txt.value = tempText  
}

function primeiraLetra(inverso = false){
    let texto = txt.value
    let tempTexto = ''
    let key = true
    function cap(t1 = 'toUpperCase()'){   
        for(c of texto){
            console.log(c)
            if ( isAlpha(c)){
                if (key ){
                    tempTexto += eval('c' + '.' + t1)
                    key = false
                }
                else{
                    tempTexto += c
                }
            }
            else if (c == ' '){
                tempTexto += c
                key = true
            }  
        }
    }
    if (!inverso){
        cap()
        
    }
    else{
        cap('toLowerCase()')
    }
    txt.value = tempTexto  
}

function inicioFrase(){
    let texto = txt.value
    let tempTexto = ''
    let key = true
    for(c of texto){
        if (isAlpha(c)){
            if(key){
                tempTexto += c.toUpperCase()
                key = false
            }
            else{
                tempTexto += c
            }
        }
        else if (c == '.' || c == '?' || c == '!'){
            tempTexto += c
            key = true
        }
        else {
            tempTexto += c
        }
    }
    txt.value = tempTexto
}

function inverter(){
    let texto = txt.value
    let indcartam = texto.length -1
    let tempTexto = ''
    if (indcartam > -1){
        for (c = indcartam ; c >= 0 ; c--){
            tempTexto += texto[c]
            
        }
    }
    txt.value = tempTexto
}

function mudaCor(){
    txt.style = 'background-color: white'
}

function voltaCor(){
    txt.style = '#e2e2e2;'
}

function copiar(){
    txt.select()
    document.execCommand('copy')
}


