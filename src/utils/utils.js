const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)      
}

const formatarNome = (nome, sobrenome) => {

    let nomeCompleto = '';
    
    if (nome) {
        nomeCompleto = primeiraLetraMaiuscula(nome.toLowerCase());
    }
    if (sobrenome) {
        nomeCompleto = nomeCompleto + " "+primeiraLetraMaiuscula(sobrenome.toLowerCase());
    }

    return nomeCompleto;
    
}


const primeiraLetraMaiuscula = (texto) => {
    
    const arrTexto = texto.toLowerCase().split(' ');
    
    if (arrTexto && arrTexto.length > 0) {
        for (let i = 0; i < arrTexto.length; i++) {
            arrTexto[i] = arrTexto[i].charAt(0).toUpperCase() + arrTexto[i].substring(1);
        }
        return arrTexto.join(' ');
    } else {
        return texto.toLowerCase().charAt(0).toUpperCase() + s.slice(1)
    }

}

module.exports = {primeiraLetraMaiuscula, capitalize, formatarNome}