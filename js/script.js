function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value
    let outputTag = document.getElementById('output')
    let myBirthday = new Date(date).toDateString()
    let day = myBirthday.split('')
    let message =`${day}`
    outputTag.innerHTML = message
}