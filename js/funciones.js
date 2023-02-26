//funcion para elegir tema claro-oscuro
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})

//funcion para elegir informacion que se ve en el body

let modulo
const divInfo = document.getElementById('infoPersonal');
const divHabilidades = document.getElementById('habilidades');
const divExperiencia = document.getElementById('experiencia');
const aInfo = document.getElementById('info');
const aExp = document.getElementById('exp');
const aHab = document.getElementById('hab');

function mostrarInfo() {
    divInfo.style.display = 'block';
    divHabilidades.style.display = 'none';
    divExperiencia.style.display = 'none';
}

function mostrarHabilidades() {
    divHabilidades.style.display = 'block';
    divInfo.style.display = 'none';
    divExperiencia.style.display = 'none';
}

function mostrarExperiencia() {
    divExperiencia.style.display = 'block';
    divHabilidades.style.display = 'none';
    divInfo.style.display = 'none';
}

aInfo.addEventListener('click', () => {
    mostrarInfo();
})
aExp.addEventListener('click', () => {
    mostrarExperiencia();
})
aHab.addEventListener('click', () => {
    mostrarHabilidades();
})

/* json desde pagina */

const informacion = document.querySelector('#informacion')
const enviarEmail = document.querySelector('#enviarEmail')

function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            informacion.innerHTML = `
            <h3>Información personal</h3>
            
            <p>
                <ul>
                    <li><img src="${data.results[0].picture.large}"  width="150px" class= "imagen img-fluid rounded-circle" alt="Foto CV."></li>
                    <li>Nombre: ${data.results[0].name.first}</li>
                    <li>Apellido: ${data.results[0].name.last}</li>
                    <li>Mail: ${data.results[0].email}</li>
                    <li>Direccion:${data.results[0].location.street.name}  ${data.results[0].location.street.number}</li>
                    <li>Numero de documento:${data.results[0].id.value}</li>
                    <li>Telefono:${data.results[0].phone}</li>   
                </ul>
            </p>    
            `
            enviarEmail.innerHTML = `
            <a href="mailto:${data.results[0].email} ">Enviar email</a>
            `
        })
}
traer();