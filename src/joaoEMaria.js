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

export { deJoaoParaMaria, getMaria, getJoao }
