function verificarCriptografia() {
    const messageBox = document.querySelector('#text-area');
    const texto = messageBox.value;
    messageBox.value = '';

    let criptografia = '';
    for(let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                criptografia += 'ai'
                break;
            case 'e':
                criptografia += 'enter'
                break;
            case 'i':
                criptografia += 'imes'
                break;
            case 'o':
                criptografia += 'ober'
                break;
            case 'u':
                criptografia += 'ufat'
                break;
            default:
                criptografia += texto[i]
        }
    } 
    resultado(criptografia);
}
        
function verificarDescriptografia() {
    const messageBox =document.querySelector('#text-area');
    const texto = messageBox.value;
    messageBox.value = '';
    let i = 0;
    let descriptografia = '';

    while (i < texto.length) {
        if (texto.startsWith('ai', i)) {
            descriptografia += 'a';
            i += 2;
        } else if (texto.startsWith('enter', i)) {
            descriptografia += 'e';
            i += 5;
        } else if (texto.startsWith('imes', i)) {
            descriptografia += 'i';
            i += 4;
        } else if (texto.startsWith('ober', i)) {
            descriptografia += 'o';
            i += 4;
        } else if (texto.startsWith('ufat', i)) {
            descriptografia += 'u';
            i += 4;
        } else {
            descriptografia += texto[i];
            i++;
        }
    }
    resultado(descriptografia);
}

function copiarParaAreaDeTransferencia () {
    let texto = document.querySelector('.texto__resultado').textContent;
    navigator.clipboard.writeText(texto);
}

function resultado(texto) {
    let textarea = document.createElement('textarea');
    textarea.classList.add('texto__resultado');
    textarea.setAttribute("disabled", true);
    textarea.textContent= texto;

    let button = document.createElement('button');
    button.innerText= 'Copiar';
    button.classList.add('apresentacao__botoes__desencriptar');
    button.onclick = copiarParaAreaDeTransferencia;

    let apresentacao = document.querySelector('.apresentacao__resultado');
    apresentacao.innerHTML = '';
    apresentacao.appendChild(textarea);
    apresentacao.appendChild(button);
}