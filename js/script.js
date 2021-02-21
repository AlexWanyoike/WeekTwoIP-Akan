function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value
    let outputTag = document.getElementById('output')
    //let myBirthday = new Date(date).value
    let myBirthday = new Date(date).toDateString()
    let day = myBirthday.split(' ')
    let name = document.getElementById('name').value
    let gender = document.getElementById('gender').value
    let message =`Hey ${name} you were born on ${day} and you are ${gender}`
    outputTag.innerHTML = message
}

let femalenames = [Akosua,Adwoa,Abenaa,Akua,Yaa,Afua,Ama]
let malenames = [Kwasi,Kwadwo,Kwabena,Kwaku,Yaw,Kofi,Kofi,Kwame]

