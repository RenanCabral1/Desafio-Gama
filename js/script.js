const form = document.getElementById('form')

form.addEventListener('submit' , (e) => {
e.preventDefault();
let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let data= { 
    nome,
    email,
}
let convertdata = JSON.stringify(data);
localStorage.setItem('lead', convertdata)
let content = document.getElementById('content')
let carregando = '<p>carregando...</p>'
content.innerHTML = carregando 

 })