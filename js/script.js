function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value
    let outputTag = document.getElementById('output')
    //let myBirthday = new Date(date).value
    let myBirthday = new Date(date).toDateString()
    let day = myBirthday.split( ' ' )
    let name = document.getElementById('name').value
    let gender = document.getElementById('gender').value  
    let solution = document.getElementsById('solution')
    solution.innerHTML= `Your Akan name would have been ${akanname}`
    let message =`Hey ${name} you were born on ${day} You are ${gender}.`
    outputTag.innerHTML = message
}
