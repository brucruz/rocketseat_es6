//Main - Desafio 1

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        console.log(this.admin === true);
    }
}

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

User1.isAdmin() // false
Adm1.isAdmin() // true

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const map = usuarios.map(item => item.idade);
console.log(map);

const filter = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18);
console.log(filter);

const find = usuarios.find(item => item.empresa === 'Google');
console.log(find);

const dobroUsuarios = usuarios.map(function(item) {
    item.idade = item.idade*2;
    return item;
});

const menos50 = dobroUsuarios.filter(item => item.idade<50);
console.log(menos50);


// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);
console.log(arr);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const idade2 = usuario => usuario.idade;
console.log(idade2(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }
console.log(promise());

const promise2 = () => new Promise( (resolve, reject) => resolve() );
console.log(promise2());

//4o exercício:
//4.1 Desestruturação simples

const empresa = {
    nome2: 'Rocketseat',
    endereco2: {
    cidade2: 'Rio do Sul',
    estado2: 'SC',
    }
   };

console.log(empresa);

const { nome2, endereco2: { cidade2, estado2 } } = empresa;

console.log(nome2); // Rocketseat
console.log(cidade2); // Rio do Sul
console.log(estado2); // SC

//4.2 Desestruturação em parâmetros

function mostraInfo( {nome10, idade10}) {
    return `${nome10} tem ${idade10} anos.`;
   }
console.log(mostraInfo({ nome10: 'Diego', idade10: 23 }));

//5o Exercicio
// 5.1 Rest

const arr2 = [1, 2, 3, 4, 5, 6];
const [ x, ...y ] = arr2;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2 Spread

const usuario100 = {
    nome100: 'Diego',
    idade100: 23,
    endereco100: {
    cidade100: 'Rio do Sul',
    uf100: 'SC',
    pais100: 'Brasil',
    }
   };
console.log(usuario100);

const usuario200 = { ...usuario100, nome100: 'Gabriel'};
console.log(usuario200);

const usuario300 = { ...usuario200, endereco100: {cidade100: 'Lontras', uf100: 'SC', pais: 'Brasil'} };
console.log(usuario300);

//6o exercício
const usuario1000 = 'Bruno';
const idade1000 = 30;
console.log(`O usuário ${usuario1000} possui ${idade1000} anos`);

//7o exercício
const nome10000 = 'Diego';
const idade10000 = 23;
const usuario10000 = {
 nome10000,
 idade10000,
 cidade10000: 'Rio do Sul',
};
console.log(usuario10000)