console.log("Hello");


// TESTANDO FUNÇÕES DE ARRAY //

let copa2026 = ["brasil", "franca", "alemanha", "italia", "espanha"]
copa2026.push ("argentina")
console.log (copa2026)
copa2026.unshift ("campeche")
console.log (copa2026)
copa2026.splice (3, 0, "equador") //insiro na 3ª posição, quantos quero deletar (deleta a partir), nome do que quero colocar//
copa2026.pop()
console.log (copa2026)


//testes//

console.log("executando uma promessa");
const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a + b == 4) {
        resolve(a + b);
      } else {
        reject("a soma deu errado");
      }
    }, 2000);
  });
};

somaDoisNumeros(5, 1)
  .then(
    (soma) => {
      if (soma < 5) {
        console.log("é menor");
      }
    },
    () => {
      console.log("deu errado");
    }
  )
  .then((soma) => {
    if (soma != 5) {
      console

      if (soma != 5) {
        console.log("é menor");
      }
    `}`
    .then((soma) => {
      if (soma > 0) {
        console.log("é menor");
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("terminou");
    });

//

//
const arrayUsers = (find) => {

  const user = users.findIndex(name=> name.name == find)
  if(user != -1){
      document.getElementById('showSearch').innerText = `Usuário ${users[user].name} encontrado com sucesso.`
  }else{
      document.getElementById('showSearch').innerText = `Usuário ${find} não encontrado`
  }
}
//

// modulo 3, semana 1, criar link whats

const numero = prompt('Digite seu numero')
const texto = prompt('Digite sua mensagem')
const link = `api.whatsapp.com/send?phone=${numero}&text=${texto}`
console.log(link)
document.getElementById('app').innerHTML = `<a href="${link}">olá</a>`

//exercício do card//


async function search () {
  const response = await fetch('https://rickandmortyapi.com/api/character/215')
  const data = await  response.json()
  console.log(data)
  document.getElementById('name').innerHTML = data?.name
  document.getElementById('status').innerHTML = data?.status

}
search()

//
/* 
async function search () {
  const response = await fetch('https://rickandmortyapi.com/api/character/215')
  const data = await  response.json()
  console.log(data)
  document.getElementById('name').innerHTML = data?.name
  document.getElementById('status').innerHTML = data?.status

}
search() */

/* setInterval(()=>{

  const d2 = '2023-02-27';
  const diffInMs = new Date(d2) - new Date()
  const diffInDays = diffInMs / (1000*60*60*24);

  if (diffInMs>0) {
    console.log(`faltam ${diffInDays`} */