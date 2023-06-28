const user = document.querySelector('#user')
let users = []

const constrasena = document.querySelector('#contrasena')
let contra = []




const user2 = document.querySelector('#user2')
let users2 = []

const contrasena2 = document.querySelector('#contrasena2')
let contra2 = []



const boton1 = document.querySelector('#boton1')
const boton2 = document.querySelector('#boton2')

const login1 = document.querySelector('.login1')
const login2 = document.querySelector('.login2')

const enlace = document.querySelector('#enlace')


boton1.addEventListener('click', e=>{

    users.push(user.value)
    contra.push(contrasena.value)
    alert("se completo el registro")
    
    login1.style.display = "none"
    login2.style.display = "flex"
    console.log(users)
    console.log(contra)
})

boton2.addEventListener('click', e=>{
    users2.push(user2.value)
    contra2.push(contrasena2.value)
    console.log(users2)
    console.log(contra2)

    if ((users[0] == user2.value) && (contra[0] == contrasena2.value) ){
        alert("ingreso")
        enlace.href = "../piepagina.html"
        
    }
    else{
        alert("incorrecto")
        enlace.href = "#"
    }
})


