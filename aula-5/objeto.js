
/*
const pessoa01 = {
    nome: 'luiz',
    sobrenome: 'Gabriel',
    idade: '23'
};

function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('pedro','henrique', 23)
const pessoa2 = criaPessoa('Heitor','Henrique', 33)
const pessoa3 = criaPessoa('Eduardo','Henrique', 13)
const pessoa4 = criaPessoa('Lucas','henrique', 53)
console.log(pessoa1)
*/

const pessoas = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: '23',

    fala() {
        console.log(`${pessoas.nome} ${pessoas.sobrenome} esta falando oi, e a idade dela e ${pessoas.idade}.`);
    },
    incrementIdade(){
        pessoas.idade++;
    }
};
pessoas.fala();

