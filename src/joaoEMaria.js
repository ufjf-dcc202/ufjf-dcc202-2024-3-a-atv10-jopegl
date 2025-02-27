let joao = 1;
let maria = 2;

function deJoaoParaMaria(){
    maria += joao;
    joao = 0;
}

function getMaria(){
    return maria;
}

function getJoao(){
    return joao;
}

function deMariaParaJoao() {
    joao += maria;
    maria = 0;
}

function setMaria(valor) {
    maria = valor;
}
function setJoao(valor) {
    joao = valor;
}

export { deJoaoParaMaria, getMaria, getJoao, deMariaParaJoao,  setMaria, setJoao}
